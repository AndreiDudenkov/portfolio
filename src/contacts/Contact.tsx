import React from 'react';
import styled from 'styled-components';
import {PrimaryFont} from '../common/styles/Styeles';
import {PrimaryTextColor} from '../common/styles/Colors';


type ContactType = {
    svg: any
    title: string
    content: string
}


export const Contact: React.FC<ContactType> = ({svg, title, content}) => {
    return (
        <StyledContact>
            <SvgContainer>
                <StyledSVG>
                    <StyledSVGSpan>
                        {svg}
                    </StyledSVGSpan>
                </StyledSVG>
            </SvgContainer>
            <TextContainer>
                <StyledH5>
                    {title}
                    <StyledP>{content}</StyledP>
                </StyledH5>
            </TextContainer>

        </StyledContact>

    )
}
const StyledContact = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
`
const StyledH5 = styled.h5`
  ${PrimaryFont};
  ${PrimaryTextColor};
  font-size: 21px;
  text-transform: uppercase;
  letter-spacing: .1em;
  margin: 0;
`
const StyledP = styled.p`
  text-transform: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .4px;
  margin: 0;
`


const StyledSVG = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 7px solid rgba(255, 255, 255, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  //margin-right: 20px;
  position: relative;

  &::before {
    content: "";
    height: 2px;
    width: 64px;
    background-color: #b0ca1e;
    position: absolute;
    z-index: 1;
    animation: rotateLine 4s linear infinite;
    animation-play-state: paused;
  }

  &:hover::before {
    animation-play-state: running;
  }

  @keyframes rotateLine {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  };
`
const StyledSVGSpan = styled.span`
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  text-decoration: none;
  color: #b0ca1e;
  -webkit-transition: all ease-in-out .3s;
  -o-transition: all ease-in-out .3s;
  transition: all ease-in-out .3s;
`
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
`
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`