import React from 'react';
import s from './Header.module.css';
import {Nav} from "../nav/Nav";
import styled from 'styled-components';



export const  Header = ()=> {
    return (
        <HeaderStyles>
            <Nav/>
        </HeaderStyles>
    )

}
const HeaderStyles = styled.div`
  height: 80px;
  background-color: #88bbd5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`


