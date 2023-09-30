import React from 'react';
import styled from 'styled-components';
import {PrimaryBackgroundColor, PrimaryColor} from '../../common/styles/Colors';


type SkillType = {

    address: any
}
export const Skill: React.FC<SkillType> = ({ address}) => {
    return (
        <StyledSkill>
            <Icon> <img src={`${process.env.PUBLIC_URL}${address}`} alt={''}/></Icon>


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
  margin: 20px;
  background-size: cover;
  background-position: center;
`
export const Icon = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  transition: height 1s;
  
  img {
    fill: red;
    height: 125px;
    width: 125px;
    ${PrimaryBackgroundColor};
    background-size: cover;
    background-position: center;
  }
`

