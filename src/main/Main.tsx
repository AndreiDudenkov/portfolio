import React from 'react';
import styled from 'styled-components';
import {Container} from '../common/styles/Styeles';


export const Main = () => {
    return (
        <MainBlock>
            <MainContainer>
                <TextStyles>
                    <span>Hi There</span>
                    <h1>I am Andrei Dudenkov</h1>
                    <p>Front-end Developer</p>
                </TextStyles>
                <PhotoStyles></PhotoStyles>
            </MainContainer>
        </MainBlock>
    )

}
const TextStyles = styled.div`
  width: 350px;
  background-color: wheat;
`
const PhotoStyles = styled.div`
  width: 300px;
  height: 400px;
  background-color: darkseagreen;
`
const MainContainer = styled.div`
  ${Container}
`
const MainBlock = styled.div`
   height: 100vh;
   background-color: #ffb3c3;
  @media screen and (max-width: 812px) {
    & ${MainContainer} {
      flex-direction: column ;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  @media screen and (max-width: 438px) {
    & ${TextStyles}, & ${PhotoStyles} {
      width: 100%;
    }
  }
`



