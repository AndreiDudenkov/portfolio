import React from 'react';
import s from './Project.module.css';

type ProjectType={
    name: string
    description: string
    img: string
}

export const Project:React.FC<ProjectType> = ({name, description}) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a className={s.button}>View</a>
            </div>
            <div className={s.projName}>{name}</div>
            <span className={s.description}>{description}</span>
        </div>
    )

}
