import styled from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/GlobalStyle'
import Head from '../components/Head'

export default () => (
  <Layout>
    <GlobalStyle />
    <Head />
    <div className="grey wrapper">
      <div className="container padded centered">
        <h2>Get in Touch</h2>
        <p>Simply fill out the handy form below, or email <a href="mailto:info@helianthus-counselling.co.uk">info@helianthus-counselling.co.uk</a>, letting me know a little about the issues you're facing, and I'll get right back to you.</p>
        <form
          action="../php/contact-form.php"
          method="POST"
        >
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="mail">Your email address</label>
          <input
            type="text"
            name="mail"
            id="mail"
            required
          />
          <label htmlFor="message">How can I help you?</label>
          <textarea
            name="message"
            id="message"
            required
          ></textarea>
          <button
            type="submit"
            name="submit"
            className="btn"
          >Send</button>
        </form>
      </div>
    </div>
  </Layout>
)

const FormWrapper = styled.div`
  
`
