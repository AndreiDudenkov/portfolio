import {css} from 'styled-components';

export const Container = css`
  min-height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 100px 100px 100px 100px;
  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`

export const PrimaryFont = css`
font-family: 'Dosis', sans-serif;`

export const SecondaryFont = css`
font-family: 'Poppins', sans-serif
`