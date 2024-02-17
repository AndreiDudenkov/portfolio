import React from 'react';
import styled from 'styled-components';
import {PrimaryBackgroundColor, PrimaryColor} from '../../common/styles/Colors';


type SkillType = {
    icon: any
}
export const Skill: React.FC<SkillType> = ({icon}) => {
    return (
        <StyledSkill>
            <Icon>{icon}</Icon>
        </StyledSkill>
    )

}
const StyledSkill = styled.div`
  display: flex;
  width: 150px;
  height: 125px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(255, 255, 255, .5);
  background-size: cover;
  background-position: center;
`
export const Icon = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  transition: height 1s;
  svg {
    height: 125px;
    width: 125px;
    ${PrimaryColor};
    background-size: cover;
    background-position: center;
  }
`

