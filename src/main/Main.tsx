import React from 'react';
import styled from 'styled-components';
import {Container, PrimaryFont, SecondaryFont} from '../common/styles/Styeles';
import ManInForest from './../assets/image/bg2.jpg';
import {PrimaryBackgroundColor, PrimaryTextColor} from '../common/styles/Colors';
import {Zigzag} from '../common/components/Zigzag';
import {Header} from '../header/Header';

export const Main = () => {
    return (
        <MainBlock>
            <Header/>
            <MainContainer>
                <TextStyles>
                    <HeadingPretitle>Hi There</HeadingPretitle>
                    <StyledTitle>I am Andrei Dudenkov</StyledTitle>
                    <StyledParagraph>Front-end Developer</StyledParagraph>
                    <Zigzag/>
                </TextStyles>
                <SeeLink>see my projects</SeeLink>
                <PhotoStyles></PhotoStyles>
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
`
const PhotoStyles = styled.div`
  //width: 300px;
  //height: 400px;
  //background-color: darkseagreen;
`
const MainContainer = styled.div`
  ${Container};
  border: none;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const MainBlock = styled.div`
  height: 100vh;
  background-image: ${MainBCGImage};
  background-size: cover;
  background-position: center;
  // @media screen and (max-width: 812px) {
  //   & ${MainContainer} {
  //     flex-direction: column;
  //     justify-content: space-evenly;
  //     align-items: center;
  //   }
  // }
  @media screen and (max-width: 438px) {
    & ${TextStyles}, & ${PhotoStyles} {
      width: 100%;
    }
  }
`
const HeadingPretitle = styled.span`
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
  ${PrimaryTextColor}
`
const StyledParagraph = styled.p`
  text-transform: uppercase;
  line-height: 90px;
  font-weight: 600;
  letter-spacing: 3px;
  margin-bottom: 0;
  font-size: 66px;
  ${PrimaryFont};
  ${PrimaryTextColor}
`

const SeeLink = styled.a`
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
  &:hover {
    ${PrimaryBackgroundColor}
    ${PrimaryTextColor};
  }
  &:active {
    box-shadow: 2px 2px 5px #b0ca1e;
  }
`