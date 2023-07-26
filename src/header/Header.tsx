import React from 'react';
import {Nav} from "../nav/Nav";
import styled from 'styled-components';
import {BurgerMenu} from './Burger-menu';
import {BurgerGPTMenu} from './GPTmenu';




export const  Header = ()=> {
    return (
        <HeaderStyles>
            <Nav/>
            <BurgerMenu/>
        </HeaderStyles>
    )
}
const HeaderStyles = styled.div`
  height: 80px;
  padding:  0 100px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 992px) {
    padding:  0 20px 0 0;
  }
`


