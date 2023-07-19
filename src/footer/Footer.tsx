import React from 'react';
import s from './Footer.module.css';
import {Container} from '../common/styles/Styeles';
import styled from 'styled-components';


export const Footer = () => {
    return (
        <ContactsBlock>
            <ContactsContainer>
                <h2>Andrei Dudenkov</h2>
                    <ContentContainer>
                        <Content></Content>
                        <Content></Content>
                        <Content></Content>
                        <Content></Content>
                    </ContentContainer>
                <Rights>
                   © All rights reserved 2023
                </Rights>
            </ContactsContainer>
        </ContactsBlock>
    )

}

const ContactsBlock = styled.div`
  height: 50vh;
  background-color: burlywood;
`
const ContentContainer = styled.div`
  width: 280px;
  height: 40px;
  border: 1px solid springgreen;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ContactsContainer = styled.div`
  ${Container};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & h2 {
    background-color: orange;

  }
  @media screen and (max-width: 360px) {
    & ${ContentContainer} {
      width: 100%;
    }
  }
`

const Content = styled.div`
  height: 40px;
  width: 40px;
  background-color: darkgrey;
`
const Rights = styled.div`
  background-color: #88bbd5;

`
