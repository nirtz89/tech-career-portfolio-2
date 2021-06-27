import styled from 'styled-components'
import AboutMePage from './pages/AboutMePage';
import HireMeMiniPage from './pages/HireMeMiniPage';
import MainPage from "./pages/MainPage";

const StyledMainApp = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <StyledMainApp>
      <MainPage />
      <AboutMePage />
      <HireMeMiniPage />
    </StyledMainApp>
  );
}

export default App;
