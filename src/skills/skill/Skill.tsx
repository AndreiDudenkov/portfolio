import React from 'react';
import s from './Skill.module.css';

type SkillType={
    technology: string
    description: string
}
export const Skill:React.FC<SkillType> = ({technology, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{technology}</h3>
            <span>{description}</span>
        </div>
    )

}
