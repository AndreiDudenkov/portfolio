import React from 'react';
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
  padding:  0 100px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
`


