import React from 'react';
import {Container, PrimaryFont, SecondaryFont} from '../common/styles/Styeles';
import styled from 'styled-components';
import {Title} from '../common/components/Title';
import Leafs from '../assets/image/Leafs.jpg';
import {PrimaryBackgroundColor, PrimaryColor, PrimaryTextColor} from '../common/styles/Colors';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import {Contact} from './Contact';


export const Contacts = () => {
    const PhoneIconSVG = <LocalPhoneIcon></LocalPhoneIcon>
    const EmailIconSVG = <EmailIcon></EmailIcon>
    const HomeIconSVG = <HomeIcon></HomeIcon>
    return (
        <ContactsBlock>
            <ContactsContainer>
                <Title title={'My contacts'}/>
                <ContactsAndFormBlock>
                    <StyledContacts>
                        <Contact svg={PhoneIconSVG} title={'CALL ME'} content={'+375(29)534-12-42'}/>
                        <Contact svg={EmailIconSVG} title={'EMAIL ME'} content={'andrei634d@gmail.com'}/>
                        <Contact svg={HomeIconSVG} title={'ADDRESS'} content={'Belarus, Vitebsk'}/>
                    </StyledContacts>
                    <Form>
                        <InputsBlock>
                            <InputWrapper>
                                <StyledInput type="text" required placeholder='Your Name *'/>
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput type="text" required placeholder='Your Email *'/>
                            </InputWrapper>
                        </InputsBlock>
                        <TextareaWrapper>
                            <StyledTextArea
                                name="" id="" rows={+'10'}
                                required placeholder='Message *'>
                            </StyledTextArea>
                        </TextareaWrapper>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`
const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  width: 40%;
  margin-right: 50px;
  padding-top: 10px;
`
const ContactsAndFormBlock = styled.div`
  //height: 30%;
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
  outline: none;
`
const StyledTextArea = styled.textarea`
  padding: 14px 50px 14px 25px;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid #eee;
  margin: 10px;
  width: 100%;
  resize: none;
  outline: none;
`
const InputsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
`
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`
const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
