import React from 'react';
import {Container} from '../common/styles/Styeles';
import {Project} from './project/Project';
import {Title} from '../common/components/Title';
import styled from 'styled-components';
import FactCheck from '@mui/icons-material/FactCheck';
import ThreeP from '@mui/icons-material/ThreeP';
import Filter1 from '@mui/icons-material/Filter1';
import WallAndTree from './../assets/image/wallAndTree.jpg';

export const Projects = () => {

    return (
        <ProjectsBlock id={'projects'}>
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
  min-height: 100vh;
`
const ProjectsStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const ProjectsContainer = styled.div`
  ${Container};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  @media screen and (max-width: 850px) {
    & ${ProjectsStyle} {
      justify-content: space-around;
      align-items: center;
    }
  }
`


