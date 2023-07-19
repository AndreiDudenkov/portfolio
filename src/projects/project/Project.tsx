import React from 'react';
import s from './Project.module.css';
import styled from 'styled-components';
import {Container} from '../../common/styles/Styeles';

type ProjectType={
    name: string
    description: string
    img: string
}

export const Project:React.FC<ProjectType> = ({name, description}) => {
    return (
        <ProjectStyle>
            <ImageContainer>
                <ViewLink>View</ViewLink>
            </ImageContainer>
            <ProjectName>{name}</ProjectName>
            <Description>{description}</Description>
        </ProjectStyle>
    )

}

const ProjectStyle = styled.div`
  padding: 25px;
  background-color: #fff;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 8px rgba(255,255,255,.5);
`

const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("data:image/jpeg;base64,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");
  background-size: cover;
  background-position: center;
`
const ViewLink = styled.a`
  border: 1px solid black;
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgrey;
`
const ProjectName = styled.h3`
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: powderblue;
`
const Description = styled.span`
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: powderblue;
`


