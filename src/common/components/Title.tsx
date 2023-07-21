import React from 'react';
import s from './Title.module.css';
import styled from 'styled-components';
import {PrimaryTextColor} from '../styles/Colors';
import {PrimaryFont} from '../styles/Styeles';
import {Zigzag} from './Zigzag';



type TitleType={
    title: string
}
export const Title:React.FC<TitleType> = ({title}) => {
    return (
                <Heading>
                    <TitleStyle>
                        <h2>{title}</h2>
                        <Zigzag/>
                    </TitleStyle>
                </Heading>
    )

}
const Heading = styled.div`
  display: flex;
  width: 100%;
  flex-direction:column;
  align-items: flex-start;
`
const TitleStyle = styled.div`
  margin-bottom: 50px;
  & h2 {
    ${PrimaryFont};
    font-size: 50px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 3px;
    ${PrimaryTextColor};
    margin: 0;
   
  }
`
