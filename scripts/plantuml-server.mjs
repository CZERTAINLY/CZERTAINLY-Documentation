// :TODO: one-line header explaining what this script does.

import {spawnSync} from 'node:child_process';

// :TODO: which version it corresponds to?
export const DOCKER_IMAGE = 'plantuml/plantuml-server@sha256:5b9968b8723e03ef585396b257127337ca5f91e58ccbffc88f085bd649a717dc';

// A tiny pre-encoded diagram ("Bob -> Alice : hello") used only to probe readiness.
const READY_ENCODED = 'SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1oW00';

/** @returns {string} the readiness probe path */
export function readinessPath() {
    return `/svg/${READY_ENCODED}`;
}

/**
 * Extract the mapped host port from `docker port <cid> 8080/tcp` output.
 * @param {string} dockerPortOutput
 * @returns {number}
 */
export function parseMappedPort(dockerPortOutput) {
    const first = dockerPortOutput.split('\n').map((s) => s.trim()).filter(Boolean)[0];
    if (!first) {
        throw new Error('could not determine the mapped port from docker port output');
    }
    const m = first.match(/:(\d+)$/);
    if (!m) {
        throw new Error(`unexpected docker port output: ${first}`);
    }
    return Number(m[1]);
}

function ensureDocker() {
    const r = spawnSync('docker', ['version', '--format', '{{.Server.Version}}'], {encoding: 'utf8'});
    if (r.status !== 0) {
        throw new Error(
            'Docker is required to render PlantUML diagrams but was not reachable.\n' +
            'Install Docker and ensure the daemon is running, or set PLANTUML_SERVER_URL to an ' +
            'already-running plantuml-server (e.g. PLANTUML_SERVER_URL=http://127.0.0.1:8080).'
        );
    }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Boot the pinned server (or reuse PLANTUML_SERVER_URL), returning its base URL and a stop fn.
 * @returns {Promise<{ baseUrl: string, stop: () => Promise<void> }>}
 */
export async function startServer() {
    const external = process.env.PLANTUML_SERVER_URL;
    if (external) {
        const baseUrl = external.replace(/\/$/, '');
        await waitReady(baseUrl);
        return {
            baseUrl, stop: async () => {
            }
        };
    }

    ensureDocker();
    const run = spawnSync('docker', [
        'run', '--rm', '-d',
        '-p', '127.0.0.1:0:8080',
        '-e', 'PLANTUML_SECURITY_PROFILE=SANDBOX',
        DOCKER_IMAGE,
    ], {encoding: 'utf8'});

    if (run.status !== 0) {
        throw new Error(`docker run failed:\n${run.stderr}`);
    }

    const cid = run.stdout.trim();

    const stop = async () => {
        spawnSync('docker', ['stop', cid], {encoding: 'utf8'});
    };

    try {
        const portRun = spawnSync('docker', ['port', cid, '8080/tcp'], {encoding: 'utf8'});
        if (portRun.status !== 0) {
            throw new Error(`docker port failed:\n${portRun.stderr}`);
        }

        const port = parseMappedPort(portRun.stdout);
        const baseUrl = `http://127.0.0.1:${port}`;
        await waitReady(baseUrl);

        return {baseUrl, stop};
    } catch (err) {
        await stop();
        throw err;
    }
}

/** Poll a trivial render until HTTP 200, bounded. @param {string} baseUrl */
async function waitReady(baseUrl, {timeoutMs = 60000} = {}) {
    const url = `${baseUrl}${readinessPath()}`;
    const deadline = Date.now() + timeoutMs;
    let lastErr = 'no response';
    while (Date.now() < deadline) {
        try {
            const res = await fetch(url);
            if (res.status === 200) {
                return;
            }

            lastErr = `HTTP ${res.status}`;
        } catch (e) {
            lastErr = e.message;
        }
        await sleep(500);
    }
    throw new Error(
        `plantuml-server did not become ready within ${timeoutMs}ms (${lastErr}). ` +
        'Check Docker health / the pinned image.'
    );
}
