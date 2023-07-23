import React from 'react';
import s from './Projects.module.css';
import {Container} from '../common/styles/Styeles';
import {Project} from './project/Project';
import {Title} from '../common/components/Title';
import styled from 'styled-components';
import FactCheck from '@mui/icons-material/FactCheck';
import ThreeP from '@mui/icons-material/ThreeP';
import Filter1 from '@mui/icons-material/Filter1';
import WallAndTree from './../assets/image/wallAndTree.jpg';
import {Remote} from '../remote/Remote';

export const Projects = () => {

    return (
        <ProjectsBlock>
            <ProjectsContainer>
                <Title title={'My projects'}/>
                <ProjectsStyle>
                    <Project name={'Todolist'}  img={<FactCheck></FactCheck>}/>
                    <Project name={'Social network'} img={<ThreeP></ThreeP>}/>
                    <Project name={'Counter'} img={<Filter1></Filter1>}/>
                </ProjectsStyle>
            </ProjectsContainer>
        </ProjectsBlock>

    )

}
 const ProjectsBlockBCGImage = `url(${WallAndTree})`

const ProjectsBlock = styled.div`
  background-image:${ProjectsBlockBCGImage};
  background-size: cover;
  background-position: center;
  height: 100vh;
`
const ProjectsStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const ProjectsContainer = styled.div`
  ${Container};
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  @media screen and (max-width: 630px) {
    & ${ProjectsStyle} {
      justify-content: space-around;
    }
  }
`


