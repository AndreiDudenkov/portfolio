import React from 'react';
import s from './Skills.module.css';
import sContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill technology={'React'} description={'React description'}/>
                    <Skill technology={'JS'} description={'JS description'}/>
                    <Skill technology={'CSS'} description={'CSS description'}/>
                </div>

            </div>
        </div>
    )

}


