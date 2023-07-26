import React from 'react';
import {Container} from '../common/styles/Styeles';
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/Title';
import styled from 'styled-components';
import Javascript from '@mui/icons-material/Javascript';
import Css from '@mui/icons-material/Css';
import Html from '@mui/icons-material/Html';
import {LiaReact} from "react-icons/lia"
import Forest from './../assets/image/forest.jpg';


export const Skills = () => {
    return (
        <SkillsBlock>
            <SkillsContainer>
                <Title title={'My skills'}/>
                <StyledSkills>
                    <Skill technology={'HTML'} icon={<Html/>}/>
                    <Skill technology={'JS'} icon={<Javascript/>}/>
                    <Skill technology={'CSS'} icon={<Css/>}/>
                    <Skill technology={'REACT'} icon={<LiaReact/>}/>
                </StyledSkills>
            </SkillsContainer>
        </SkillsBlock>
    )
}

const SkillBCGImage = `url(${Forest})`

const SkillsBlock = styled.div`
  min-height: 100vh;
  background-image: ${SkillBCGImage};
  background-size: cover;
  background-position: center;
`
const StyledSkills = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 20px;
  flex-wrap: wrap;
  box-sizing: border-box;
`
const SkillsContainer = styled.div`
  padding: 100px 0;
  ${Container};
  border: none;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 627px) {
    & ${StyledSkills} {
      justify-content: center;
    }
  }
`
