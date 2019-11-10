import React from 'react';
import { Row, Col } from 'antd';

import propTemplates from '../../propTemplates';

import styles from './index.module.css';

const HomepageTemplate = ({ header, sider, children }) => {
  return (
    <div>
      <Row>
        <Col xs={3}>
          <aside className={styles.sider}>{sider}</aside>
        </Col>
        <Col xs={21}>
          <Row>
            <Col>
              <header>{header}</header>
            </Col>
            <Col>
              <main className={styles.main}>{children}</main>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

HomepageTemplate.propTypes = {
  header: propTemplates.children.propTypes,
  sider: propTemplates.children.propTypes,
  children: propTemplates.children.propTypes
};

HomepageTemplate.defaultProps = {
  header: propTemplates.children.defaultProps,
  sider: propTemplates.children.defaultProps,
  children: propTemplates.children.defaultProps
};

export default HomepageTemplate;
