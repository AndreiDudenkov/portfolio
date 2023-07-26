import React from 'react';
import styled from 'styled-components';
import {PrimaryColor, PrimaryTextColor} from '../common/styles/Colors';
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
  display: flex;
  justify-content: space-between;
  margin: 10px;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 992px) {
    display: none ;
  }
  @media screen and (min-width: 992px) {
    display: flex ;
  }
`
const NavLink = styled.a`
  ${PrimaryTextColor};
  ${SecondaryFont};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 5px;
  &:hover {
    ${PrimaryColor};
  }

  &:active {
    text-shadow: 2px 2px 5px #b0ca1e;
  }
`


