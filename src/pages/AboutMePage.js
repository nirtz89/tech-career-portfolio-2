import styled from 'styled-components'
import { colors, Page, VerticalLine } from '../common/CommonStyles';
import SkillBar from '../common/SkillBar';

const StyledAboutMePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    padding: 64px;
    color: ${colors.mainFontColor};
    h2 {
        font-size: 30px;
    }
    p {
        color: ${colors.mutedFontColor};
        text-align: center;
        font-weight: 400;
    }
`;

const AboutMeBody = styled.div`
    width: 100%;
    min-height: 400px;
    margin-top: 16px;
    display: flex;
`;

const AboutMeImage = styled.div`
    padding: 32px;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
        border-radius: 32px;
        height: 100%;
    }
`;

const AboutMeDetails = styled.div`
    padding: 32px;
    width: 50%;
    display: flex;
    flex-direction: column;
    span {
        display: inline-block;
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 20px;
    }
    h3 {
        color: ${colors.secondaryFontColor};
        font-size: 24px;
    }
    p {
        margin-bottom: 16px;
        width: 75%;
        text-align: left;
    }
`;

const StyledSignature = styled.img`
    width: 150px;
    margin-bottom: 16px;
    margin-top: 16px;
`;


function AboutMePage() {
    return (
      <Page>
          <StyledAboutMePage>
              <h2>About Me</h2>
              <VerticalLine />
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/>nisi ut aliquip ex ea commodo consequat.</p>
              <AboutMeBody>
                  <AboutMeImage>
                      <img src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="About me" />
                  </AboutMeImage>
                  <AboutMeDetails>
                      <span>Hello & Welcome</span>
                      <h3>I'M Dhrums Deo.</h3>
                      <span>UI/UX Designer • Photographer • Devloper</span>
                      <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                      <StyledSignature src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/7323792/original/aa2088c6b8d140c8e3b3006d21a9f74c7a2cd949/extract-1-to-4-signatures-to-transparent-png-image.png" alt="signature" />
                      <SkillBar skillName="React" skillLevel={80} />
                      <SkillBar skillName="CSS" skillLevel={100} />
                      <SkillBar skillName="Styled Components" skillLevel={5} />
                      <SkillBar skillName="C#" skillLevel={60} />
                  </AboutMeDetails>
              </AboutMeBody>
          </StyledAboutMePage>
      </Page>
    );
  }
  
  export default AboutMePage;
  