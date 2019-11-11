import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './index.module.css';

const Character = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "character.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      alt="my-role-representation-as-character"
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={`${styles.image} ${className}`}
    />
  );
};

Character.propTypes = {
  className: PropTypes.string
};

Character.defaultProps = {
  className: ''
};

export default Character;
