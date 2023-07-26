import React from 'react';
import s from './Remote.module.css';
import {Container, SecondaryFont} from '../common/styles/Styeles';
import styled from 'styled-components';
import {Title} from '../common/components/Title';
import Bridge from '../assets/image/Bridge.jpg';
import {PrimaryBackgroundColor, PrimaryTextColor} from '../common/styles/Colors';


export const Remote = () => {
    return (
        <RemoteBlock>
            <RemoteContainer>
                <Title title={'Considering remote work'}/>
                <SeeLink>hire me</SeeLink>
            </RemoteContainer>
        </RemoteBlock>
    )

}
const BridgeBCGImage = `url(${Bridge})`

const RemoteBlock = styled.div`
  background-image: ${BridgeBCGImage};
  background-size: cover;
  background-position: center;
`

const RemoteContainer = styled.div`
  ${Container};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  &:hover {
    ${PrimaryBackgroundColor}
    ${PrimaryTextColor};
  }
  &:active {
    box-shadow: 2px 2px 5px #b0ca1e;
  }
`
