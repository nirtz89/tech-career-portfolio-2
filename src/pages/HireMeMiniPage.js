import styled from 'styled-components'
import { MiniPage, SecondaryButton } from '../common/CommonStyles';

const StyledHireMeMiniPage = styled.div`
    width: 100%;
    height: 100%;
    background: url('https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    background-position: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
`;

const MainHireMeMiniPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    h2 {
        color: #fff;
        font-size: 50px;
        margin-bottom: 16px;
    }
`;

const Darken = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    opacity: 0.6;
`;

function HireMeMiniPage() {
    return (
      <MiniPage>
          <StyledHireMeMiniPage>
            <Darken></Darken>
            <MainHireMeMiniPage>
                <h2>I Am Available For Freelancer.</h2>
                <SecondaryButton>Hire Me</SecondaryButton>
            </MainHireMeMiniPage>
          </StyledHireMeMiniPage>
      </MiniPage>
    );
  }
  
  export default HireMeMiniPage;
  