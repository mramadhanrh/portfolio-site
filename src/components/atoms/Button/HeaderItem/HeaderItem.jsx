import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const HeaderItem = ({ text, onClick }) => {
  return (
    <button aria-label={text} type="button" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

HeaderItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

HeaderItem.defaultProps = {
  text: '',
  onClick: () => {}
};

export default HeaderItem;
