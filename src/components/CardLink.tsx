import React from 'react';
import clsx from "clsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './CardLink.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

export default function CardLink({title, body, to, button, icon}): JSX.Element {
  return (
      <div className={clsx('col col--4')}>
          {/*<div className={styles.cardDemo}>*/}
          <div className="card-demo">
          {/*    <div className={styles.card}>*/}
              <div className="card">
                  <div className="card__header">
                      <span style={{color: '#3fb24d',}}><h3><FontAwesomeIcon icon={icon} /> {title}</h3></span>
                  </div>
                  <div className="card__body">
                      {body}
                  </div>
                  <div className="card__footer">
                      <Link
                          className="button button--info button--block"
                          to={to}
                      >
                          {button}
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  );
}
