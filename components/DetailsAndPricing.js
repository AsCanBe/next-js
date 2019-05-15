import styled from 'styled-components';

export default () => (
  <div id="details-and-pricing">
    <div className="wrapper purple">
      <div className="padded align--center">
        <h2
          className="section-title"
          role="heading"
        >Pricing</h2>
        <h4 role="heading">One-to-one Counselling</h4>
        <p>£50 per session</p>
        <p>£25 per session for students and unwaged (with verification)</p>
        <h4 role="heading">Couple's Therapy</h4>
        <p>£80 per session</p>
        <p>Payment will be made at the end of the counselling session with cash, debit card or bank transfer.</p>
        <h2 role="heading">Availability</h2>
        <p>7.30am – 5.30pm, Monday - Friday</p>
        <p>(Some evenings are available)</p>
        <h2 role="heading">Types of Clients</h2>
        <p>All adults and young adults 16+</p>
      </div>
    </div>
    <div className="wrapper grey">
      <TypesOfSession className="padded">
        <h2
          className="section-title"
          role="heading"
        >Types of Session</h2>
        <FlexWrapper
          className="flexbox--desktop"
          role="list"
        >
          <div role="listitem">
            <img src="/static/face-to-face.png" />
            <p>Face to Face</p>
          </div>
          <div role="listitem">
            <img src="/static/skype.png" />
            <p>Via Skype</p>
          </div>
        </FlexWrapper>
      </TypesOfSession>
    </div>
  </div>
)

const TypesOfSession = styled.div`
  text-align: center;
  img {
    width:    118px;
    height:   118px;
  }
`

const FlexWrapper = styled.div`
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`
