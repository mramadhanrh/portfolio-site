import React from 'react';
import HomeHeader from '../../components/organisms/Header/HomeHeader';
import HomepageTemplate from '../../templates/HomepageTemplate';
import Layout from '../../templates/Layout/Layout';
import SEO from '../../components/seo';

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <HomepageTemplate header={<HomeHeader />} />
    </Layout>
  );
};

export default Homepage;
