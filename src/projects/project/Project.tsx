import React from 'react';
import s from './Project.module.css';
import styled from 'styled-components';
import {Container} from '../../common/styles/Styeles';
import FactCheck from '@mui/icons-material/FactCheck';

type ProjectType = {
    name: string
    description: string
    img: string
}

export const Project: React.FC<ProjectType> = ({name, description}) => {
    return (
        <ProjectStyle>
            <ImageProjectNameContainer>
                <Image>
                    <FactCheck/>
                </Image>
                <ProjectName>{name}</ProjectName>
            </ImageProjectNameContainer>
            <ViewLink>View</ViewLink>
            {/*<Description>{description}</Description>*/}
        </ProjectStyle>
    )

}

const ProjectName = styled.h3`
  color: #2d2d2d;
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  transition: width 2s;
  
`
export const Image = styled.svg`
  display: flex;
  height: 150px;
  width: 100%;
  color: #b0ca1e;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  transition: height 1s;

`
const ImageProjectNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectStyle = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(255, 255, 255, .5);

  &:hover {
    justify-content: space-between;
    align-items: center;

    ${Image} {
      height: 75px;
      width: 75px;
      margin: 10px;
    }

    ${ImageProjectNameContainer} {
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    ${ProjectName} {
      width: 30%;
      margin: 10px;
    }

  }
`
const ViewLink = styled.a`
  height: 0px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgrey;
  overflow: hidden;
  transition: height .3s;

  ${ProjectStyle}:hover & {
    height: 50px;
  }

`


const Description = styled.span`
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: powderblue;
`


