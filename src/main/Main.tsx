import React, {useRef} from 'react';
import styled from 'styled-components';
import {Container, PrimaryFont, SecondaryFont} from '../common/styles/Styeles';
import ManInForest from './../assets/image/bg2.jpg';
import {PrimaryBackgroundColor, PrimaryTextColor} from '../common/styles/Colors';
import {Zigzag} from '../common/components/Zigzag';
import {Header} from '../header/Header';



export const Main= ()=> {

    return (
        <MainBlock id={'main'}>
            <Header/>
            <MainContainer>
                <TextStyles>
                    <HeadingSubtitle>Hi There</HeadingSubtitle>
                    <StyledTitle>I am Andrei Dudenkov</StyledTitle>
                    <StyledSecondTitle>Front-end Developer</StyledSecondTitle>
                    <Zigzag/>
                </TextStyles>
                <SeeLink href='#projects'>see my projects</SeeLink>
            </MainContainer>
        </MainBlock>
    )
}
const MainBCGImage = `url(${ManInForest})`

const TextStyles = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`
const MainContainer = styled.div`
  ${Container};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

`
const MainBlock = styled.header`
  min-height: 100vh;
  background-image: ${MainBCGImage};
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 576px) {
    & ${TextStyles}{
      width: 100%;
    }
  }
`
const HeadingSubtitle = styled.span`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
  ${PrimaryFont};
  ${PrimaryTextColor}
`
const StyledTitle = styled.h1`
  text-transform: uppercase;
  line-height: 90px;
  font-weight: 600;
  letter-spacing: 3px;
  margin-bottom: 0;
  font-size: 66px;
  ${PrimaryFont};
  ${PrimaryTextColor};
  
  @media screen and (max-width: 576px) {
    font-size: 40px
}
`
const StyledSecondTitle= styled.div`
  text-transform: uppercase;
  line-height: 90px;
  font-weight: 600;
  letter-spacing: 3px;
  margin-bottom: 0;
  font-size: 66px;
  ${PrimaryFont};
  ${PrimaryTextColor};
  @media screen and (max-width: 576px) {
  font-size: 40px
}
`

const SeeLink = styled.a`
  text-decoration: none;
  color: inherit;
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${SecondaryFont};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: #fff;
  text-transform: uppercase;
  border-radius: 30px;
  transition: .5s;
  margin: 15px;
  &:hover {
    ${PrimaryBackgroundColor}
    ${PrimaryTextColor};
  }
  &:active {
    box-shadow: 2px 2px 5px #b0ca1e;
  }
`