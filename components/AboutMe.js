import styled from 'styled-components'

export default () => (
  <div
    id="about-me"
  >
    <Greeting className="wrapper grey">
      <div className="padded flexbox--desktop">
        <div className="align--center">
          <img src="../static/carolyn-fordham-200x200.png" />
        </div>
        <div className="flexbox--desktop verticalCenter">
          <h2>Hi, my name's Carrie.</h2>
          <p>From here you can find out more about me and the Helianthus Counselling service in general, and contact me by phone, text or email to arrange a consultation.</p>
        </div>
      </div>
    </Greeting>
    <div className="wrapper">
      <div className="padded">
        <h2
          className="section-title"
          role="heading"
        >About Me</h2>
        <p>As a <a href="https://www.bacp.co.uk/" target="_blank">BACP (British Association of Counsellors and Psychotherapists) registered counsellor</a>, I am fully qualified to practise, and always adhere to their ethical guidelines. I also attend Clinical Supervision regularly, ensuring that I am practising effectively and to the highest standard for each client.</p>
        <p>I practise with a Person-Centred or Client-Centred approach, and aim to create a warm, non-judgemental atmosphere in which <i>you</i> are considered the expert about your own feelings and emotions. Together, we will work to make sense of troubling difficulties, whether they be current or in the past. Person-centred counselling can be very effective for a wide range of issues, including depression, anxiety and grief. All sessions are completely confidential, and are on a strictly one-to-one basis.</p>
        <p>I offer both face-to-face and Skype sessions, and although I do not feel that email counselling offers the immediacy needed for therapy to be successful, I am open to an initial consultation via email if that makes you feel more comfortable.</p>
        <p>My profile on Counselling Directory can be found <a href="https://www.counselling-directory.org.uk/counsellors/carolyn-fordham" target="_blank">here</a>.</p>
      </div>
    </div>
  </div>
)

const Greeting = styled.div`
  img {
    border-radius: 50%;
    width:         80%;
    @media (min-width: 768px) {
      width:       auto;
      margin:      1rem 2rem 1rem 0;
    }
  }
  @media (min-width: 768px) {
    h2 {
      text-align: left;
    }
  }
`
