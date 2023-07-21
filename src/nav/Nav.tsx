import React from 'react';
import s from './Nav.module.css';
import styled from 'styled-components';
import {PrimaryBackgroundColor, PrimaryColor, PrimaryTextColor} from '../common/styles/Colors';
import {SecondaryFont} from '../common/styles/Styeles';


export const Nav = () => {
    return (
        <NavStyles>
            <NavLink href="">Main</NavLink>
            <NavLink href="">Skills</NavLink>
            <NavLink href="">Projects</NavLink>
            <NavLink href="">Contacts</NavLink>
        </NavStyles>
    )

}
const NavStyles = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;

`
const NavLink = styled.a`
  ${PrimaryTextColor};
  ${SecondaryFont};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  &:hover {
    ${PrimaryColor};
  }
  &:active {
    text-shadow: 2px 2px 5px #b0ca1e;
  }
`


