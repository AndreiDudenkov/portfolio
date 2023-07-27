import React from 'react';
import styled from 'styled-components';
import {Burger} from './Burger';


export const NavBar = () => {
    return (
        <Nav>
            <Burger/>
        </Nav>
    );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`