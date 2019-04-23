import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import DetailsAndPricing from '../components/DetailsAndPricing'
import ContactForm from '../components/ContactForm'

import Styles from '../components/Styles'

export default class Index extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const toTopButton = document.getElementById('to-top-button');

    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        toTopButton.classList.remove('scrolled');
      } else if (window.scrollY > 0) {
        toTopButton.classList.add('scrolled');
      }
    })
  }

  render() {
    return (
      <Layout>
        <Styles />
        <Main scroll={this.scroll} />
        <AboutMe />
        <DetailsAndPricing />
        <ContactForm />
      </Layout>
    )
  }
}
