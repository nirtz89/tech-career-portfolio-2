import styled from 'styled-components'
import { colors } from './CommonStyles';

const StyledSkillBar = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
    max-width: 500px;
`;

const TopSkillBar = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TopSkillBarName = styled.div`
    font-weight: 800;
`;

const SkillBarLine = styled.div`
    width: 100%;
    height: 10px;
    background: lightgray;
    border-radius: 16px;
    margin-top: 8px;
`;

function SkillBar(props) {

    const SkillBarMiddleLine = styled.div`
        width: ${props.skillLevel}%;
        height: 100%;
        background: ${colors.secondaryFontColor};
        border-radius: 16px;
    `;

    return (
      <StyledSkillBar>
          <TopSkillBar>
            <TopSkillBarName>{props.skillName}</TopSkillBarName>
            <div>{props.skillLevel}%</div>
          </TopSkillBar>
          <SkillBarLine>
              <SkillBarMiddleLine></SkillBarMiddleLine>
          </SkillBarLine>
      </StyledSkillBar>
    );
  }
  
  export default SkillBar;