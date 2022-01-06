import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import CardLink from "@site/src/components/CardLink";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { faDatabase } from '@fortawesome/free-solid-svg-icons'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
              src={useBaseUrl("img/czertainly_color_H.svg")}
              className={styles.introImage}
          />
          <br />
          <br />
          <h1 className={styles.heroTitle}>Contributing to CZERTAINLY</h1>
          <p className={styles.heroSubtitle}>
            We encourage everyone to make contributions to CZERTAINLY platform. You can be a part of the community
            and improving the security of the internet. Your contribution is important to enhance the platform and make
            it more affordable and available for all of us using digital certificate.
          </p>
        </div>
      </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Medicine for your certificates!/>"
    >
      <HomepageHeader />
      <br />
      <main>
        <div className="container">
          <div className="text--center padding-horiz--md">
            <p>
              Read below guides on how to contribute to CZERTAINLY.
            </p>
          </div>
        </div>
        <br />
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {/*<CardLink*/}
              {/*    title="Source Code Management"*/}
              {/*    body="How is the source code of the CZERTAINLY organized and managed. How to use the branching model to work on features, bug fixes, etc."*/}
              {/*    to={useBaseUrl("contributors/scm")}*/}
              {/*    button="Learn More" />*/}
              {/*<CardLink*/}
              {/*    title="Commit Rules"*/}
              {/*    body="Commit rules including the formatting rules to follow when contributing to CZERTAINLY. Based on Git Commit Good Practices."*/}
              {/*    to={useBaseUrl("contributors/commit")}*/}
              {/*    button="Learn More" />*/}
              <CardLink
                  icon={faDatabase}
                  title="Database"
                  body="How to work with the CZERTAINLY database in case there is a need to alter schema, tables, or data. How to manage database control with migrations."
                  to={useBaseUrl("contributors/database")}
                  button="Learn More" />
            </div>
          </div>
        </section>
        <br /><br />
      </main>
    </Layout>
  );
}
