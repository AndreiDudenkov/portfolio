import React from 'react';
import styled from 'styled-components';

export const Zigzag:React.FC = () => {
    return (
        <StyledZigzag>
            <svg x="0px" y="0px" viewBox="0 0 100 19.5">
                <g>
                    <polygon
                        points="79.3,18 69.6,8.3 60,18 50.3,8.3 40.6,18 31,8.3 21.3,18 11.7,8.3 3.4,16.5 0.6,13.7 11.7,2.7 21.3,12.3 31,2.7 								40.6,12.3 50.3,2.7 60,12.3 69.6,2.7 79.3,12.3 88.9,2.7 100,13.6 97.2,16.4 89,8.3 "></polygon>
                </g>
            </svg>
        </StyledZigzag>
    )
}
const StyledZigzag = styled.div`
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