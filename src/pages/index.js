import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout.js';

export default function IndexPage() {
  return (
    <Layout >
      <h1>Hello</h1>
      <h2>I´m raiesbo</h2>
      <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
      <p>Need a developer? <Link to='/about-me'>About me.</Link></p>
      <p>Need a developer? <Link to='/blog'>Blog posts</Link></p>
    </Layout>
  )
}