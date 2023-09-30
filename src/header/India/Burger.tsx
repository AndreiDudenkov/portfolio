// @ts-nocheck
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {RightNav} from './RightNav';


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: none;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }


  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}) => open ? '#fff' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all .3s linear;

    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? 'flex' : 'none')};
`;

export const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger onClick={() => setOpen(!open)} open={open}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <Overlay open={open} onClick={() => setOpen(!open)}/>
            <RightNav open={open} setView={()=>setOpen(!open)} />
        </>
    );
}

// const StyledBurger = styled.div`
//   width: 2rem;
//   height: 2rem;
//   position: fixed;
//   top: 15px;
//   right: 20px;
//   display: flex;
//   justify-content: space-around;
//   flex-flow: column nowrap;
//   z-index: 1;
//
//   @media screen and (min-width: 768px) {
//     display: none;
//   }
//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background-color: ${({open}) => open ? '#fff' : '#fff'};
//     border-radius: 10px;
//     transform-origin: 1px;
//     transition: all .3s linear;
//
//     &:nth-child(1) {
//       transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
//     }
//
//     &:nth-child(2) {
//       transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
//       opacity: ${({open}) => open ? '0' : '1'};
//     }
//
//     &:nth-child(3) {
//       transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//     }
//   }
// `
// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: ${({ open }) => (open ? 'flex' : 'none')};
// `;
// export const Burger = () => {
//     const [open, setOpen] = useState(false);
//
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 768) {
//                 setOpen(false);
//             }
//         };
//
//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);
//
//     const handleBurgerClick = () => {
//         setOpen(!open);
//     };
//
//     const handleOverlayClick = () => {
//         setOpen(false);
//     };
//
//     return (
//         <>
//             <StyledBurger onClick={handleBurgerClick} open={open}>
//                 <div />
//                 <div />
//                 <div />
//             </StyledBurger>
//             <Overlay open={open} onClick={handleOverlayClick} />
//             <RightNav open={open} setView={() => setOpen(!open)} />
//         </>
//     );
// };