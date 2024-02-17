import React from 'react';
import styled from 'styled-components';
import { SecondaryFont} from '../../common/styles/Styeles';
import {PrimaryBackgroundColor, PrimaryColor, PrimaryTextColor} from '../../common/styles/Colors';


type ProjectType = {
    name: string
    img: any
    link: string
}

export const Project: React.FC<ProjectType> = ({name, img, link}) => {
    return (
        <ProjectStyle>
            <ImageProjectNameContainer>
                <Image>
                    {img}
                </Image>
                <ProjectName>{name}</ProjectName>
            </ImageProjectNameContainer>
            <ViewLink href={link}>View</ViewLink>
        </ProjectStyle>
    )

}

const ProjectName = styled.h3`
  font-family: 'Dosis', sans-serif;
  color: #2d2d2d;
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  transition: width 2s;
`
export const Image = styled.svg`
  display: flex;
  height: 150px;
  width: 100%;
  ${PrimaryColor};
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  transition: height 1s;
`
const ImageProjectNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectStyle = styled.div`
  display: flex;
  width: 250px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(255, 255, 255, .5);

  &:hover {
    justify-content: space-between;
    align-items: center;

    ${Image} {
      height: 75px;
      width: 75px;
      margin: 10px;
    }

    ${ImageProjectNameContainer} {
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    ${ProjectName} {
      width: 30%;
      margin: 10px;
    }
  }
`

const ViewLink = styled.a`
  text-decoration: none;
  height: 0px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: height .5s;
  ${PrimaryTextColor};
  ${SecondaryFont};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  ${PrimaryBackgroundColor};
  text-transform: uppercase;
  border-radius: 30px;
  ${ProjectStyle}:hover & {
    height: 50px;
  }

  &:active {
    box-shadow: 2px 2px 5px #b0ca1e;
  }
`




