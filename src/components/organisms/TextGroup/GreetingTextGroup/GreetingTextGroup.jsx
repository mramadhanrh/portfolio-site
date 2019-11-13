import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import RoundedButton from '../../../atoms/Button/RoundedButton/RoundedButton';

import styles from './index.module.css';

const useStyles = makeStyles({
  container__button: {
    backgroundColor: '#1e88e5',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: 'midnightblue',
      color: '#ffffff'
    }
  }
});

const GreetingTextGroup = ({ className }) => {
  const classname = useStyles();

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
      <RoundedButton
        className={classname.container__button}
        href="https://www.linkedin.com/in/mramadhanr/"
        target="_blank"
      >
        <span className={styles.button__text}>
          Get in touch with me!
          <span className={styles.button__emoji} role="img" aria-label="waving-hand">
            👋
          </span>
        </span>
      </RoundedButton>
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
