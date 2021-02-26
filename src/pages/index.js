import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

export default function IndexPage() {

  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I´m raiesbo</h2>
      <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
      <p>Need a developer? <Link to='/about-me'>About me.</Link></p>
      <p>Need a developer? <Link to='/blog'>Blog posts</Link></p>
      <Footer />
    </div>
  )
}