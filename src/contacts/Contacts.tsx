import React from 'react';
import s from './Contacts.module.css';
import {Container} from '../common/styles/Styeles';
import styled from 'styled-components';



export const Contacts = () => {
    return (
        <ContactsBlock>
            <ContactsContainer>
                <h2>Contacts</h2>
                <Form>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id='' rows={+'10'}></textarea>
                </Form>
                <StyledButton type={'submit'}>Send</StyledButton>
            </ContactsContainer>
        </ContactsBlock>
    )

}
const ContactsBlock = styled.div`
  height: 100vh;
  background-color: powderblue;
`

const ContactsContainer = styled.div`
  ${Container};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & h2 {
    background-color: orange;
  }
  @media screen and (max-width: 700px) {
    .Form{
      width: 100%;
    }
  }
`
const Form = styled.form`
  border: 1px solid black;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`
const StyledButton = styled.button`
  height: 50px;
  width: 200px;
`

