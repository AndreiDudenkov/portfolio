import React from 'react';
import {Container} from '../common/styles/Styeles';
import styled from 'styled-components';
import BigLeafs from '../assets/image/BigLeafs.jpg';
import {Title} from '../common/components/Title';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import {PrimaryColor, PrimaryTextColor} from '../common/styles/Colors';

export const Footer = () => {
    return (
        <ContactsBlock>
            <ContactsContainer>
                <Title title={'Andrei Dudenkov'}/>
                <ContentContainer>
                    <Content>
                        <a href="https://github.com/AndreiDudenkov">
                            <GitHubIcon></GitHubIcon>
                        </a>
                    </Content>
                    <Content>
                        <a href="https://www.linkedin.com/in/andrei-dudenkov-448006287">
                            <LinkedInIcon></LinkedInIcon>
                        </a>
                    </Content>
                    <Content>
                        <a href="https://t.me/Andrei_634">
                            <TelegramIcon></TelegramIcon>
                        </a>
                    </Content>
                </ContentContainer>
                <Rights>
                    <RightsSpan>©</RightsSpan>
                    All rights reserved 2023
                </Rights>
            </ContactsContainer>
        </ContactsBlock>
    )

}
const FooterBCGImage = `url(${BigLeafs})`

const ContactsBlock = styled.div`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  background-image: ${FooterBCGImage};
  background-size: cover;
  background-position: center;
  background-color: burlywood;
`
const ContentContainer = styled.div`
  width: 280px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ContactsContainer = styled.div`
  ${Container};
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  & svg{
    height: 100%;
    width: 100%;
    ${PrimaryTextColor};
    &:active {
      filter: drop-shadow(1px 1px 1px #b0ca1e)
    }
    &:hover {
      ${PrimaryColor};
  }
`

const Rights = styled.div`
  color: #fff;
 padding: 50px;
  font-weight: 500;
  letter-spacing: .5px;
  font-size: 15px;
`
const RightsSpan = styled.span`
  color: #b0ca1e;
  font-weight: 600;
  margin-right: 10px;
`
