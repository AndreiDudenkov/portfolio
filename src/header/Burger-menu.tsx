import React, {useState} from 'react';
import styled from 'styled-components';
import {PrimaryTextColor} from '../common/styles/Colors';
import {PrimaryFont} from '../common/styles/Styeles';
import MenuIcon from '@mui/icons-material/Menu';
import Road from '../assets/image/road.jpg';
import ClearIcon from '@mui/icons-material/Clear';


export const BurgerMenu = () => {
    let [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <AllMenu>
            <StyledButton onClick={toggleMenu}><MenuIcon/></StyledButton>
            {isOpen && (
                <Overlay onClick={toggleMenu}>
                    <StyledMenu open={isOpen}>
                        <List>
                            <StyledButton onClick={toggleMenu}><ClearIcon/></StyledButton>
                            <ListItem>Main</ListItem>
                            <ListItem>Skills</ListItem>
                            <ListItem>Projects</ListItem>
                            <ListItem>Contacts</ListItem>
                        </List>
                    </StyledMenu>
                </Overlay>
            )}
        </AllMenu>
    );
}
const MainBCGImage = `url(${Road})`

const AllMenu = styled.div`
  @media screen and (max-width: 992px) {
    display: flex ;
  }
  @media screen and (min-width: 992px) {
    display: none ;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;


const StyledMenu = styled.div<{open:boolean}>`
  background-image: ${MainBCGImage};
  background-size: cover;
  background-position: center;
  padding-top: 10px;
  width: 300px;
  height: 100%;
  // transform: translateX(${props => props.open ? 0 : '100%'});
  // transition: transform 0.5s ease-in-out;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.div`
  //background-color: #61dafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 4px;
  line-height: 1;
  margin-bottom: 20px;
  ${PrimaryFont};
  ${PrimaryTextColor};
  cursor: pointer;
`;

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  & svg {
    height: 50px;
    width: 50px;
    ${PrimaryTextColor}
  }
`;