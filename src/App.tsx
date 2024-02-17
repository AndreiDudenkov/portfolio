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
    return (
            <div>
                <Main/>
                <main>
                <Skills/>
                <Projects/>
                <Remote/>
                <Contacts/>
                </main>
                <Footer/>
            </div>
    )
}
