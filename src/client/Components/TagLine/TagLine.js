import React from 'react';

import styles from './TagLine.scss';

const TagLine = () => (
  <div className={styles.root}>
    <div className={styles.headline}>
      Devshop For Hire
    </div>
    <div className={styles.followUp}>
      Also available for:
    </div>
    <div className={styles.followUp}>
      Happy hours, bowling, and birthday parties.
    </div>
  </div>
);

export default TagLine;
