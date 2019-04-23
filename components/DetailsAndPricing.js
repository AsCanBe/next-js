import styled from 'styled-components'

export default () => (
  <div id="details-and-pricing">
    <div className="wrapper purple">
      <div className="padded align--center">
        <h2 className="section-title">Pricing</h2>
        <p>£50 per session</p>
        <p>£25 per session for students and unwaged (with verification)</p>
        <p>Your introductory session will be completely free of charge. It is usual to have one session per week thereafter, which each last for 50 minutes, but there is no upper limit on the amount of sessions you can choose to attend.</p>
        <h2>Availability</h2>
        <p>7.30am – 5.30pm, Monday - Friday</p>
        <p>(Some evenings are available)</p>
        <h2>Types of Clients</h2>
        <p>All adults</p>
      </div>
    </div>
    <div className="wrapper grey">
      <TypesOfSession className="padded">
        <h2 className="section-title">Types of Session</h2>
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
