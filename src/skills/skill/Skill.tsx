import React from 'react';
import s from './Skill.module.css';
import styled from 'styled-components';

type SkillType = {
    technology: string
    description: string
}
export const Skill: React.FC<SkillType> = ({technology, description}) => {
    return (
        <StyledSkill>
            <Icon></Icon>
            <h3>{technology}</h3>
            <span>{description}</span>
        </StyledSkill>
    )

}
const StyledSkill = styled.div`
  border: 1px solid black;
  width: 250px;
  background-color: #a2a169;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /*выравнивает строчные эл-ты вроде span*/
  padding: 20px;
  box-sizing: border-box;
`

const Icon = styled.div`
  height: 60px;
  width: 60px;
  background-color: skyblue
`
