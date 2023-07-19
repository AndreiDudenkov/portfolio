import React from 'react';
import s from './Remote.module.css';
import  {Container} from '../common/styles/Styeles';
import styled from 'styled-components';


export const Remote = () => {
    return (
        <RemoteBlock>
            <RemoteContainer>
                <h2>Considering remote work</h2>
                <StyledButton>Hire me</StyledButton>
            </RemoteContainer>
        </RemoteBlock>
    )

}
const RemoteBlock = styled.div`
  background-color: mediumaquamarine;
`

const RemoteContainer = styled.div`
  ${Container};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    background-color: orange;
  }
`
const StyledButton = styled.div`
  height: 50px;
  width: 200px;
`

