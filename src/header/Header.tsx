import React from 'react';
import styled from 'styled-components';
import {NavBar} from './India/NavBar';


// type HeaderType = {
//     scrollStarted: boolean
// }


export const Header = () => {
    return (
        <HeaderStyles >
            <NavBar/>
        </HeaderStyles>
    )
}

const HeaderStyles = styled.div`
  height: 80px;
  padding: 0 100px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // position: sticky;
  // top: 0;
  // background-color: #282c34;
  // z-index: 10;
  // transition: opacity 1s ease-in-out;
`


