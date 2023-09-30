import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Remote} from './remote/Remote';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';
import {Route, Router, Routes} from 'react-router-dom';
import styled from 'styled-components';

export const App = () => {
    // const [scrollStarted, setScrollStarted] = useState(false);
    //
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             setScrollStarted(true);
    //         } else {
    //             setScrollStarted(false);
    //         }
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
            <div>
                {/*<Header scrollStarted={scrollStarted}/>*/}
                <Main/>
                <Skills/>
                <Projects/>
                <Remote/>
                <Contacts/>
                <Footer/>
            </div>
    )
}

// const AppWrapp