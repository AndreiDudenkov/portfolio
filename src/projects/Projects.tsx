import React from 'react';
import s from './Projects.module.css';
import {Container} from '../common/styles/Styeles';
import {Project} from './project/Project';
import {Title} from '../common/components/Title';
import styled from 'styled-components';


export const Projects = () => {
    return (
        <ProjectsBlock>
            <ProjectsContainer>
                <Title title={'My projects'}/>
                <ProjectsStyle>
                    <Project name={'Todolist'} description={'React note taking app'} img={'imgTodolist'}/>
                    <Project name={'Social network'} description={'React app social network'} img={'imgSocialNetwork'}/>
                </ProjectsStyle>
            </ProjectsContainer>
        </ProjectsBlock>
    )

}
const ProjectsBlock = styled.div`
  background-image: url("https://alian4x.com/html/mumbrass/images/bg3.jpg");
  padding: 100px 0;
`
const ProjectsStyle = styled.div`
  border: 1px solid orange;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const ProjectsContainer = styled.div`
  ${Container};
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


