import React from 'react';
import s from './Skill.module.css';
import styled from 'styled-components';
import {PrimaryColor} from '../../common/styles/Colors';


type SkillType = {
    technology: string
    icon: any
}
export const Skill: React.FC<SkillType> = ({technology, icon}) => {
    return (
        <StyledSkill>
            <Icon>{icon}</Icon>
            <h3>{technology}</h3>
            {/*<span>{description}</span>*/}
        </StyledSkill>
    )

}
const StyledSkill = styled.div`
  display: flex;
  width: 250px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(255, 255, 255, .5);
  margin: 20px;
  background-size: cover;
  background-position: center;
`
export const Icon = styled.svg`
  display: flex;
  height: 150px;
  width: 60%;
  ${PrimaryColor};
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  transition: height 1s;
`

