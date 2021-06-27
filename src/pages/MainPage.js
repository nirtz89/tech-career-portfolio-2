import styled from 'styled-components'
import { Page, PrimaryButton } from '../common/CommonStyles';

const StyledMainPage = styled.div`
    width: 100%;
    height: 100%;
    background: url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    position: relative;
`;

const Darken = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: black;
    opacity: 0.6;
`;

const MainPageBody = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 80px;
    }
`;

const MainPageHeaderLight = styled.span`
    font-weight: 400;
    opacity: 0.75;
`;

const MainPageHeaderDetails = styled.h2`
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 32px;
`;

function MainPage() {
    return (
      <Page>
          <StyledMainPage>
              <Darken></Darken>
              <MainPageBody>
                    <h1><MainPageHeaderLight>I AM</MainPageHeaderLight> ELON MUSK</h1>
                    <MainPageHeaderDetails>Living in Israel | +972508242001 | example@gmail.com</MainPageHeaderDetails>
                    <PrimaryButton>Download CV</PrimaryButton>
              </MainPageBody>
          </StyledMainPage>
      </Page>
    );
  }
  
  export default MainPage;
  