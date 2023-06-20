import React from 'react';
import s from './Remote.module.css';
import sContainer from "../common/styles/Container.module.css";


export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteContainer}`}>
                <h2 className={s.title}>Considering remote work</h2>
                <button className={s.button}>Hire me</button>
            </div>
        </div>
    )

}