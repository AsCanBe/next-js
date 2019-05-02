import styled from 'styled-components';

export default () => (
  <div
    id="about-me"
  >
    <Greeting className="wrapper grey">
      <div className="padded flexbox--desktop">
        <div className="align--center">
          <img
            src="../static/carrie-fordham.png"
            alt="Carrie Fordham"
          />
        </div>
        <div className="flexbox--desktop verticalCenter">
          <h2>Hi, my name's Carrie.</h2>
          <p>From here you can find out more about me and the Helianthus Counselling service in general, and contact me by phone, text or <a href="mailto:info@helianthus-counselling.co.uk" target="_blank">email</a> to arrange a consultation.</p>
        </div>
      </div>
    </Greeting>
    <div className="wrapper">
      <div className="padded">
        <h2
          className="section-title"
          role="heading"
        >About Me</h2>
        <p>I practise with a Person-Centred approach, and aim to create a warm, non-judgemental atmosphere in which <i>you</i> are considered the expert about your own feelings and emotions. Together, we will work to make sense of troubling difficulties, whether they be current or in the past. Talking to someone who listens with empathy, genuineness and unconditional positive regard can give you a reconnection with your feelings and the ability to make sense of what has happened. Person-centred counselling can be very effective for a wide range of issues, including depression, anxiety and grief.</p>
      </div>
    </div>
    <div className="wrapper flexbox flexbox--desktop">
      <div className="quote align--center">
        <p><i>“The shoe that fits one person pinches another; there is no recipe for living that fits all cases.”</i></p>
        <span>- Carl Rogers, Founder of Person-Centred Therapy.</span>
      </div>
      <div className="quote align--center">
        <p><i>“It is the client who knows what hurts, what directions to go, what problems are crucial, what experiences have been deeply buried.”</i></p>
        <span>- Carl Rogers</span>
      </div>
    </div>
    <div className="wrapper">
      <div className="padded">
        <p>I am able to offer:</p>
        <h4 role="heading">One-to-one Counselling</h4>
        <p>This happens on a face to face basis for 50 minute sessions, usually once a week for 6 weeks or for as long as you feel that you need it.</p>
        <h4 role="heading">Couple’s Therapy</h4>
        <p>This counselling is for any couples (16 or above), whatever their relationship – whether romantic partners, siblings or a parent and offspring. This is on a face to face basis for 75 minute sessions, usually every fortnight for 3 to 6 sessions or for as long as you feel that you need it.</p>
        <p>As a <a href="https://www.bacp.co.uk/" target="_blank">BACP (British Association of Counsellors and Psychotherapists)</a> registered counsellor, I am fully qualified to practise, and always adhere to their ethical guidelines. I also attend Clinical Supervision regularly, ensuring that I am practising effectively and to the highest standard for each client.</p>
        <p>My profile on Counselling Directory can be found <a href="http://www.counselling-directory.org.uk/counsellors/carolyn-fordham" target="_blank">here</a>.</p>
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
