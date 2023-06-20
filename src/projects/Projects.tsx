import React from 'react';
import s from './Projects.module.css';
import sContainer from '../common/styles/Container.module.css';
import {Project} from "./project/Project";



export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    <Project name={'Todolist'} description={'React note taking app'} img={'imgTodolist'}/>
                    <Project name={'Social network'} description={'React app social network'} img={'imgSocialNetwork'}/>
                </div>

            </div>
        </div>
    )

}