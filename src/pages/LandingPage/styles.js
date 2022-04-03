import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    overflow: hidden;
  }
`

export const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-y: hidden;
  overflow-x: hidden;
`

export const FirstPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;

  overflow-y: hidden;
  overflow-x: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.8s;

  opacity: ${( props ) => ( props.firstOpacity )};
  z-index: ${( props ) => ( props.firstZ )};

  scroll-behavior: smooth;
  -webkit-user-select: none;

  perspective: 10px;
`

export const ImgWrapper = styled.div`

  position: relative;
  width: 100%;
  height: 100%;
  
  padding: 0px;
  margin: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  transform-style: preserve-3d;

`

export const BackgroundImg = styled.img`

  height: 120%;
  object-fit: cover;
  transition: all 0.1s;

  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 1;

  position: relative;
  bottom: ${( props ) => ( props.imgBottom )};

  transition: ease 0.8s; 

  transform: scale(1.2);
  transform-style: preserve-3d;
  animation-name: zoomIn;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-duration: 2s;

  @keyframes zoomIn{
    from{
      transform: scale(1.5);
    }
    to{
      transform: scale(1.2);
    }
  }
`

export const TitleWrapper = styled.div`
  
`

export const Title1 = styled.h1`
  position: absolute;

  width: max-content;

  z-index: 2;

  font-size: 7.5vmin;
  color: white;

  opacity: 1;
  top: 34%;
  left: 40%;
  transform: translate(-50%, -50%);
  transition: ease 0.3s;

  animation-name: appear1;
  animation-duration: 2s;
  transform: translate(-50%, -50%);

  @keyframes appear1{
    from{
      display: none;
      opacity: 0;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    30%{
      opacity: 0;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    to{
      opacity: 1;
      top: 34%;
      left: 40%;
      transform: translate(-50%, -50%);
    }
  }
  
`

export const Title2 = styled.h2`
  position: absolute;

  width: max-content;

  z-index: 2;

  font-size: 7.5vmin;
  color: white;

  opacity: 1;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
  transition: ease 0.3s;

  animation-name: appear2;
  animation-duration: 2s;
  transform: translate(-50%, -50%);

  @keyframes appear2{
    from{
      display: none;
      opacity: 0;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    30%{
      opacity: 0;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    to{
      opacity: 1;
      top: 45%;
      left: 45%;
      transform: translate(-50%, -50%);
    }
  }
`

export const Underline = styled.span`
  border-bottom: 1vmin solid white;
  padding: 0px;
`

export const SecondPageWrapper = styled.div`

  width: 100vw;
  height: 100vh;

  transition: opacity 2s;
  opacity: ${( props ) => ( props.secondOpacity )};

  overflow-x: hidden;
  overflow-y: hidden;

  z-index: 0;

  font-family: 'Roboto Slab', serif;
  letter-spacing: 0.01vmin;

  perspective: 10px;

  -webkit-user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  font-weight: 300;
`

export const Iam = styled.p`
  width: max-content;
  height: 100px;

  position: absolute;
  top: 10%;
  left: 10%;
  
  margin: 0px, 0px, 20px, 0px;

  font-size: 9vmin;
  font-weight: 500;

  cursor: pointer;
  overflow-x: hidden;
`

export const ForestText = styled.span`
  color: #464209;
  opacity: 0.8;
  font-weight: 400;
`

export const Frontend = styled.p`
  position: absolute;
  top: 30%;
  left: 13%;

  font-size: 7vmin;

  cursor: pointer;

  transition: all 1s;

  &:hover{
    font-size: 7.5vmin;
  }
`

export const Hanyang = styled.p`
  position: absolute;
  top: 40%;
  left: 13%;
  font-size: 7vmin;

  cursor: pointer;

  transition: all 1s;

  &:hover{
    font-size: 7.5vmin;
}
`

export const Awaker = styled.p`

  position: absolute;
  top: 50%;
  left: 13%;

  width: max-content;

  font-size: 7vmin;

  cursor: pointer;

  transition: all 1s;


  &:hover{
    font-size: 7.5vmin;
  }
`

export const Member = styled.p`

  position: absolute;
  top: 60%;
  left: 13%;

  font-size: 7vmin;

  cursor: pointer;

  transition: all 1s;


  &:hover{
    font-size: 7.5vmin;
  }
`
