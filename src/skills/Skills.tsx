import React from 'react';
import s from './Skills.module.css';
import sContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/Title';


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.skills}>
                    <Skill technology={'React'} description={'React description'}/>
                    <Skill technology={'JS'} description={'JS description'}/>
                    <Skill technology={'CSS'} description={'CSS description'}/>
                </div>

            </div>
        </div>
    )

}


