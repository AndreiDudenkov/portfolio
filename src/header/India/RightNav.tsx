import React from 'react';
import styled from 'styled-components';
import {PrimaryColor, PrimaryTextColor} from '../../common/styles/Colors';
import {PrimaryFont, SecondaryFont} from '../../common/styles/Styeles';
import Road from '../../assets/image/road.jpg';

type RightNavType = {
    open: boolean
}

export const RightNav: React.FC<RightNavType> = ({open}) => {
    return (
        <Ul open={open}>
            <li>Main</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contacts</li>
        </Ul>
    );
}


interface MyULProps extends React.HTMLAttributes<HTMLUListElement> {
    open?: boolean;
}
const MainBCGImage = `url(${Road})`

const Ul = styled.ul<MyULProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    list-style: none;
    padding: 18px 10px;
    ${PrimaryTextColor};
    ${SecondaryFont};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    &:hover {
      ${PrimaryColor};
    }
    &:active {
      text-shadow: 2px 2px 5px #b0ca1e;
    }
  }
  @media (max-width: 768px) {
    background-image: ${MainBCGImage};
    background-size: cover;
    background-position: center;
    flex-flow: column nowrap;
    background-color: royalblue;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 1s ease-in-out;
    li {
      list-style: none;
      flex-direction: column;
      align-items: center;
      text-transform: uppercase;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 4px;
      line-height: 1;
      margin-bottom: 20px;
      ${PrimaryFont};
      ${PrimaryTextColor};
      cursor: pointer;;
    }
  }
`