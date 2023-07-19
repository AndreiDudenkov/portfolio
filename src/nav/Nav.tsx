import React from 'react';
import s from './Nav.module.css';
import styled from 'styled-components';



export const  Nav = ()=> {
    return (
        <NavStyles>
            <a href=''>Main</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contacts</a>
        </NavStyles>
    )

}
const NavStyles = styled.div`
  border: 1px solid red;
  width: 300px;
  display: flex;
  justify-content: space-between;
`


