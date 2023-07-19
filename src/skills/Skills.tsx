import React from 'react';
import s from './Skills.module.css';
import {Container} from '../common/styles/Styeles';
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/Title';
import styled from 'styled-components';


export const Skills = () => {
    return (
        <SkillsBlock>
            <SkillsContainer>
                <Title title={'My skills'}/>
                <StyledSkills>
                    <Skill technology={'React'} description={'React description'}/>
                    <Skill technology={'JS'} description={'JS description'}/>
                    <Skill technology={'CSS'} description={'CSS description'}/>
                </StyledSkills>
            </SkillsContainer>
        </SkillsBlock>
    )

}


const SkillsBlock = styled.div`
  min-height: 100vh;
  background-color: #36a295;
`
const StyledSkills = styled.div`
  border: 1px solid slateblue;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
`
const SkillsContainer = styled.div`
  ${Container};
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 627px) {
    & ${StyledSkills} {
      justify-content: center;
    }
  }
`
