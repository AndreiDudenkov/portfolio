import React from 'react';
import s from './Contacts.module.css';
import {Container, PrimaryFont, SecondaryFont} from '../common/styles/Styeles';
import styled from 'styled-components';
import {Title} from '../common/components/Title';
import Leafs from '../assets/image/Leafs.jpg';
import {PrimaryBackgroundColor, PrimaryColor, PrimaryTextColor} from '../common/styles/Colors';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

export const Contacts = () => {
    return (
        <ContactsBlock>
            <ContactsContainer>
                <Title title={'My contacts'}/>
                <ContactsAndFormBlock>
                    <StyledContacts>
                        <StyledContact>
                            <StyledSVG>
                                <StyledSVGSpan>
                                    <LocalPhoneIcon />
                                </StyledSVGSpan>
                            </StyledSVG>
                            <StyledH5>
                                CALL ME
                                <StyledP>+375(29)534-12-42</StyledP>
                            </StyledH5>
                        </StyledContact>
                        <StyledContact>
                            <StyledSVG>
                                <StyledSVGSpan>
                                    <EmailIcon />
                                </StyledSVGSpan>
                            </StyledSVG>
                          <StyledH5>
                              EMAIL ME
                              <StyledP>andrei634d@gamil.com</StyledP>
                          </StyledH5>
                        </StyledContact>
                        <StyledContact>
                            <StyledSVG>
                                <StyledSVGSpan>
                                    <HomeIcon />
                                </StyledSVGSpan>
                            </StyledSVG>
                            <StyledH5>
                                ADDRESS
                                <StyledP>Belarus, Vitebsk</StyledP>
                            </StyledH5>
                        </StyledContact>
                    </StyledContacts>
                    <Form>
                        <InputsBlock>
                            <StyledInput type="text"/>
                            <StyledInput type="text"/>
                        </InputsBlock>
                        <StyledTextArea name="" id="" rows={+'10'}></StyledTextArea>
                    </Form>

                </ContactsAndFormBlock>
                <SubmitButton>Submit</SubmitButton>
            </ContactsContainer>
        </ContactsBlock>
    )

}
const LeafsBCGImage = `url(${Leafs})`

const ContactsBlock = styled.div`
  background-image: ${LeafsBCGImage};
  height: 100vh;
  background-color: powderblue;
`

const ContactsContainer = styled.div`
  ${Container};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 700px) {
    .Form {
      width: 100%;
    }
  }
`
const Form = styled.form`
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledContacts = styled.div`
  //background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  margin-right: 50px;
`
const StyledContact = styled.div`
  //border: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  text-transform:none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .4px;
  margin: 0;
  `


const StyledSVG = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 7px solid rgba(255,255,255,.5);
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
  } ;
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
  //&::before {
  //  content: "";
  //}
`
const ContactsAndFormBlock = styled.div`
  height: 30%;
  width: 100%;
  //background-color: orange;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: -150px;
`

const SubmitButton = styled.button`
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
  border: none;

  &:hover {
    ${PrimaryBackgroundColor}
    ${PrimaryTextColor};
  }

  &:active {
    box-shadow: 2px 2px 5px #b0ca1e;
  }
`
const StyledInput = styled.input`
  width: 100%;
  padding: 14px 50px 14px 25px;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid #eee;
  margin: 10px;
`
const StyledTextArea = styled.textarea`
  padding: 14px 50px 14px 25px;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid #eee;
  margin: 10px;
`
const InputsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
