import React, {FormEventHandler, MouseEventHandler, useState} from 'react';
import {Container, PrimaryFont, SecondaryFont} from '../common/styles/Styeles';
import styled from 'styled-components';
import {Title, TitleStyle} from '../common/components/Title';
import Leafs from '../assets/image/Leafs.jpg';
import {PrimaryBackgroundColor, PrimaryColor, PrimaryTextColor} from '../common/styles/Colors';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import {Contact} from './Contact';


export const Contacts = () => {
    const PhoneIconSVG = <LocalPhoneIcon/>
    const EmailIconSVG = <EmailIcon/>
    const HomeIconSVG = <HomeIcon/>
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const submitHandler:FormEventHandler<HTMLFormElement>  = (e) => {
        e.preventDefault()
        alert((`Name: ${name}\nEmail: ${email}\nMessage: ${message}`))
    }
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
                    <Form onSubmit={submitHandler}>
                        <InputsBlock>
                            <InputWrapper>
                                <StyledInput type="text"
                                             required placeholder="Your Name *"
                                             value={name}
                                             onChange={(e) => setName(e.target.value)}/>
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput type="text"
                                             required placeholder="Your Email *" value={email}
                                             onChange={(e) => setEmail(e.target.value)}/>
                            </InputWrapper>
                        </InputsBlock>
                        <TextareaWrapper>
                            <StyledTextArea
                                name="" id="" rows={+'10'}
                                required placeholder="Message *"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}/>
                        </TextareaWrapper>
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </Form>
                </ContactsAndFormBlock>
            </ContactsContainer>
        </ContactsBlock>
    )

}
const LeafsBCGImage = `url(${Leafs})`

const ContactsBlock = styled.div`
  background-image: ${LeafsBCGImage};
  min-height: 100vh;
  background-color: powderblue;
`
const ContactsAndFormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
const ContactsContainer = styled.div`
  ${Container};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 992px) {
    ${ContactsAndFormBlock} {
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
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
  justify-content: center;
  width: 40%;
  margin-right: 50px;
  padding-top: 10px;
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
  margin: 10px;
  cursor: pointer;

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
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
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
