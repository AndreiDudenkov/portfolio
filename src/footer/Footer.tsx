import React from 'react';
import s from './Footer.module.css';
import sContainer from "../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Andrei Dudenkov</h2>
                    <div className={s.contentContainer}>
                        <div className={s.content}></div>
                        <div className={s.content}></div>
                        <div className={s.content}></div>
                        <div className={s.content}></div>
                    </div>
                <div className={s.rights}>
                   © All rights reserved 2023
                </div>
            </div>
        </div>
    )

}