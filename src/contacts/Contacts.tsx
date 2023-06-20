import React from 'react';
import s from './Contacts.module.css';
import sContainer from "../common/styles/Container.module.css";



export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.inputsContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id='' rows={+'10'}></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    )

}