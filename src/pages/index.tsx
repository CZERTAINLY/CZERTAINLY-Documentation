import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";
import PlatformModules from "@site/src/components/PlatformModules";
import WhatIsCZERTAINLY from "@site/src/components/WhatIsCZERTAINLY";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          src={useBaseUrl("img/czertainly_white_H.svg")}
          className={styles.introImage}
        />
        <br />
        <br />
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--success button--lg buttonTextWhite"
            // className={[styles.buttonTextColor, styles.button, styles.buttonSuccess, styles.buttonLg].join(' ')}
            to={useBaseUrl("docs/")}
          >
            Get Started️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Security and trust assurance and automation in ever connected world!/>"
    >
      <HomepageHeader />
      <main className={styles.main}>
        <WhatIsCZERTAINLY />
        <PlatformModules />
      </main>
    </Layout>
  );
}
