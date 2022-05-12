// React
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Css
import {
  LandingContainer,
  FirstPageWrapper,
  ImgWrapper,
  BackgroundImg,
  TitleWrapper,
  Title1,
  Title2,
  Underline,
  SecondPageWrapper,
  ContentWrapper,
  Iam,
  Frontend,
  Awaker,
  Hanyang,
  Member,
  ForestText,
  GlobalStyles,
  Arrrow
} from './styles'

// Assets
import rainForest from '../../assets/img/rainForest.jpeg'

function Home() {
  const navigate = useNavigate();
  const [firstOpacity, setFirstOpacity] = useState(1);
  const [secondOpacity, setSecondOpacity] = useState(0);
  const [firstZ, setFirstZ] = useState(1);
  const [imgScale, setImgScale] = useState(1.2);
  const [imgBottom, setImgBottom] = useState(0);

  const [name, setName] = useState('주노');

  const [delta, setDelta] = useState(0);

  const changeWord = function(array, setState){

    for(let ii = 0; ii < array[0].length; ii ++){
      
      let charArray = array[0].split('');
      let result = ''

      for(let aa = 0; aa <= ii; aa++){
        result = result + charArray[aa];
      }
      setTimeout(function(){
        
        setName(result)
      }, (3000 + (ii * 500)))
    }
  }

  useEffect(function(){

    changeWord(['어웨이커'], setName)

    // setTimeout(function(){
    //   setName('주')
    // }, 3000)
    // setTimeout(function(){
    //   setName('')
    // }, 3500)
    // setTimeout(function(){
    //   setName('어')
    // }, 5000)
    // setTimeout(function(){
    //   setName('어웨')
    // }, 5600)
    // setTimeout(function(){
    //   setName('어웨이')
    // }, 5900)
    // setTimeout(function(){
    //   setName('어웨이커')
    // }, 6500)
  }, [])

  useEffect(function(){
    const zoomEvent = function(e) {

      setDelta(e.deltaY);
    }
    
    window.addEventListener('wheel', zoomEvent);


    return function(){

      window.removeEventListener('wheel', zoomEvent);

    }
  },[])

  useEffect(function () { // 배경화면 줌인 이벤트 리스너

    // if(delta < 0 && imgScale > 1.2) {

    //   console.log(imgScale)
    //   setFirstOpacity(1);
    //   setSecondOpacity(0);
    //   setFirstZ(1);
    //   setImgScale(imgScale - 0.3);
    //   setImgBottom(imgBottom + 5);

    // } else if (delta > 0 && imgScale < 2) {

    //   console.log(imgScale)
    //   setFirstZ(1);
    //   setTimeout(function () { setFirstOpacity(0.95) }, 100)
    //   setImgScale(imgScale + 0.3);
    //   setImgBottom(imgBottom - 5);

    // } else if(delta > 0 && imgScale >= 2) {

    //   console.log(imgScale)
    //   setFirstOpacity(0);
    //   setFirstZ(-1);
    //   setSecondOpacity(1);
    // }

    if(delta < 0 ) {

      setFirstOpacity(1);
      setSecondOpacity(0);
      setFirstZ(1);
      setImgScale(1.2);
      setImgBottom(imgBottom + 5);

    } else if (delta > 0) {

      console.log(imgScale)
      setFirstOpacity(0);
      setFirstZ(-1);
      setImgScale(2);
      setSecondOpacity(1);
    }

  }, [delta])

  let touchY = 0;
  let touchYEnd = 0;

  useEffect(function(){


    window.addEventListener('touchstart', function(e){

      touchY = e.touches[0].clientY;
      console.log(touchY);
    })

    window.addEventListener('touchend', function(e){

      touchYEnd = e.changedTouches[0].clientY;
      
      
      if(touchY > touchYEnd){ // 내리는 터치 모션
        
        setImgScale(2.1);
        setFirstOpacity(0);
        setFirstZ(-1);
        setSecondOpacity(1);

        this.window.removeEventListener('touchstart', function(e){

          touchY = e.touches[0].clientY;
          console.log(touchY);
        })
      }
      // } else if(touchY < touchYEnd){  // 내리는 터치 모션
        
      //   setImgScale(1.2);
      //   setFirstOpacity(1);
      //   setFirstZ(1);
      //   setSecondOpacity(0);
      // }
    })

  }, [touchY, touchYEnd])

  return (
    <LandingContainer>
      <GlobalStyles />
      <FirstPageWrapper firstOpacity={firstOpacity} firstZ={firstZ}>
        <ImgWrapper>
            <BackgroundImg 
              src={rainForest}
              imgBottom={imgBottom} 
              style={{
                transform:`scale(${imgScale})`,
              }}
            />
        </ImgWrapper>
        <TitleWrapper>
          <Title1>안녕하세요</Title1>
          <Title2>
            <Underline>{name}</Underline>입니다.
          </Title2>
        </TitleWrapper>
      </FirstPageWrapper>
      
      {/* page after scroll */}
      <SecondPageWrapper secondOpacity={secondOpacity}>
        <ContentWrapper>
          <Iam>I am Juno.</Iam>
          <Frontend onClick={function () { navigate('post/?type=Frontend') }}>Front-end <ForestText>Developer</ForestText></Frontend>
          <Awaker  onClick={function () { navigate('post/?type=Awaker') }}><ForestText>Awaker</ForestText> at AwakeCorp</Awaker>
          <Hanyang  onClick={function () { navigate('post/?type=Hanyang') }}>Hanyang Univ. <ForestText>Student</ForestText></Hanyang>
          <Member  onClick={function () { navigate('post/?type=ForestAsset') }}><ForestText>Member</ForestText> of Forest Asset</Member>
        </ContentWrapper>
      </SecondPageWrapper>
    </LandingContainer>
  );
}

export default Home;
