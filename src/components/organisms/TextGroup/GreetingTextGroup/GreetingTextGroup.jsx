import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const GreetingTextGroup = ({ className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <h1 className={styles.container__greeting}>Hi, call me Ramadhan</h1>
      <h3 className={styles.container__role}>
        <span className={styles.role__job}>Front-end Engineer </span>
        <span className={styles.role__dnd}>a.k.a Code Summoner</span>
      </h3>
      <p className={styles.container__summary}>
        I&apos;am a creative and passionate developer that not only get the work done, but also pay
        attention to code structure, documentation, and maintainability to my code.
      </p>
    </div>
  );
};

GreetingTextGroup.propTypes = {
  className: PropTypes.string
};

GreetingTextGroup.defaultProps = {
  className: ''
};

export default GreetingTextGroup;
