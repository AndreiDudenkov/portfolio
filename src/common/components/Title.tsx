import React from 'react';
import s from './Title.module.css';
import styled from 'styled-components';


type TitleType={
    title: string
}
export const Title:React.FC<TitleType> = ({title}) => {
    return (
                <Heading>
                    <TitleStyle>
                        <h2>{title}</h2>
                        <Zigzag>
                            <svg x="0px" y="0px" viewBox="0 0 100 19.5">
                                <g>
                                    <polygon
                                        points="79.3,18 69.6,8.3 60,18 50.3,8.3 40.6,18 31,8.3 21.3,18 11.7,8.3 3.4,16.5 0.6,13.7 11.7,2.7 21.3,12.3 31,2.7 								40.6,12.3 50.3,2.7 60,12.3 69.6,2.7 79.3,12.3 88.9,2.7 100,13.6 97.2,16.4 89,8.3 "></polygon>
                                </g>
                            </svg>
                        </Zigzag>
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
    font-family: 'Dosis', sans-serif;
    font-size: 50px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 3px;
    margin: 0;
    color: #fff;
    box-sizing: inherit
  }
`
const Zigzag = styled.div`
  height: 10px;
  width: 60px;
  margin-top: 19px;
  margin-bottom: 18px;
  & svg {
    position: relative;
    top: -7px;
    fill: #b0ca1e;
  }
`