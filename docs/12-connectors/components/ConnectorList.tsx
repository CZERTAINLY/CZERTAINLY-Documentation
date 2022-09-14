/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './ConnectorList.module.css';
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

type ConnectorItem = {
  title: string;
  link: string;
  description: JSX.Element;
};

const ConnectorList: ConnectorItem[] = [
    {
        title: 'Common Credential Provider',
        link: '',
        description: (
            <table className={styles.functionTable}>
                <th>Function Group</th>
                <th>Kind</th>
                <tr>
                    <td><span className="badge">Credential Provider</span></td>
                    <td>
                        <span className="badge">Basic</span><br/>
                        <span className="badge">SoftKeyStore</span><br/>
                        <span className="badge">ApiKey</span>
                    </td>
                </tr>
            </table>
        ),
    },
    {
        title: 'MS ADCS Connector',
        link: 'ms-adcs-connector/integration-guide',
        description: (
            <table className={styles.functionTable}>
                <th>Function Group</th>
                <th>Kind</th>
                <tr>
                    <td><span className="badge">Authority Provider</span></td>
                    <td><span className="badge">ADCS</span></td>
                </tr>
                <tr>
                    <td><span className="badge">Discovery Provider</span></td>
                    <td><span className="badge">ADCS</span></td>
                </tr>
            </table>
        ),
    },
    {
        title: 'Network Discovery Provider',
        link: '',
        description: (
            <table className={styles.functionTable}>
                <th>Function Group</th>
                <th>Kind</th>
                <tr>
                    <td><span className="badge">Discovery Provider</span></td>
                    <td><span className="badge">IP/Hostname</span></td>
                </tr>
            </table>
        ),
    },
    {
        title: 'EJBCA NG Connector',
        link: 'ejbca-ng-connector/integration-guide',
        description: (
            <table className={styles.functionTable}>
                <th>Function Group</th>
                <th>Kind</th>
                <tr>
                    <td><span className="badge">Authority Provider</span></td>
                    <td><span className="badge">EJBCA</span></td>
                </tr>
                <tr>
                    <td><span className="badge">Discovery Provider</span></td>
                    <td>
                        <span className="badge">EJBCA</span><br/>
                        <span className="badge">EJBCA_SCHEDULE</span>
                    </td>
                </tr>
            </table>
        ),
    },
    {
        title: 'Cryptosense Discovery Provider',
        link: '',
        description: (
            <table className={styles.functionTable}>
                <th>Function Group</th>
                <th>Kind</th>
                <tr>
                    <td><span className="badge">Discovery Provider</span></td>
                    <td><span className="badge">Cryptosense</span></td>
                </tr>
            </table>
        ),
    },
    {
        title: 'EJBCA Legacy Connector',
        link: '',
        description: (
            <table className={styles.functionTable}>
                <th>Function Group</th>
                <th>Kind</th>
                <tr>
                    <td><span className="badge">Authority Provider</span></td>
                    <td><span className="badge">LegacyEjbca</span></td>
                </tr>
            </table>
        ),
    },
    {
        title: 'X509 Compliance Provider',
        link: '',
        description: (
            <table className={styles.functionTable}>
                <th>Function Group</th>
                <th>Kind</th>
                <tr>
                    <td><span className="badge">Compliance Provider</span></td>
                    <td><span className="badge">X509</span></td>
                </tr>
            </table>
        ),
    },
    {
        title: 'Keystore Entity Provider',
        link: '',
        description: (
            <table className={styles.functionTable}>
                <th>Function Group</th>
                <th>Kind</th>
                <tr>
                    <td><span className="badge">Entity Provider</span></td>
                    <td><span className="badge">Keystore</span></td>
                </tr>
            </table>
        ),
    },
];

function Feature({title, link, description}: ConnectorItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className={clsx(styles.feature, "text--center")}>
          <h3>
          <Link
              to={link}
          >
              {title}
          </Link>
          </h3>
          {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ConnectorList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
