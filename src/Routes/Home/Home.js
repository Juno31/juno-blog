// React
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Css
import './Home.css';
import Header from './Home.module.css'

function Home() {

  // library API
  const navigate = useNavigate();

  // 내부 스테이트
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(function () { // 배경화면 줌인 이벤트 리스너
    var initialScale = 1;
    var initialBottom = 0;
    var initialFontSize = 8;

    const zoomEvent = function (e) { // 첫 랜더링 시 휠 효과
      var imgElement = document.getElementById('background');
      var wrapper = document.getElementById('wrapper');
      var headerWrapper = document.getElementById('header-wrapper')
      var title1 = document.getElementById('title1');
      var title2 = document.getElementById('title2');

      if (e.deltaY < 0 && initialScale > 1) { // 휠 내릴 때
        headerWrapper.style.opacity = `0`
        setTimeout(function () { wrapper.style.opacity = `1`; wrapper.style.zIndex = `1` }, 0)
        initialScale -= 0.1
        initialBottom += 5
        
        imgElement.style.transform = `scale(${(initialScale)})`
        imgElement.style.bottom = `${initialBottom}px`

        
      } else if (e.deltaY > 0 && initialScale < 2) { // 휠 올릴 때
        wrapper.style.zIndex = `1`
        initialScale += 0.1
        initialBottom -= 5
        
        
        setTimeout(function(){wrapper.style.opacity = '0.95'}, 100)
        imgElement.style.transform = `scale(${(initialScale)})`
        imgElement.style.bottom = `${initialBottom}px`


      } else if ( e.deltaY > 0 && initialScale > 2) { // 휠 끝까지 올렸을 때 (이벤트 리스너 제거)
        wrapper.style.opacity = `0`
        wrapper.style.zIndex = `-1`
        setTimeout(function () { headerWrapper.style.opacity = `1` }, 700)
        setFirstVisit(false)
      }
    }
    if (firstVisit) {
      window.addEventListener('wheel', zoomEvent)
    }
    return function(){
      window.removeEventListener('wheel', zoomEvent);
    }
  }, [])

  return (
    <div className='container'>
      <div className='wrapper' id='wrapper'>
        <header>
          <img src='assets/rainForest.jpeg' className='background' id='background' />
        </header>
        <div className='titleContainer'>
          <h1 className='title1' id='title1'>안녕하세요</h1>
          <h1 className='title2' id='title2'><span>주노</span>입니다.</h1>
        </div>
      </div>
      <header className={Header.wrapper} id='header-wrapper'>
        <div className={Header.contentContainer}>
          <p className={Header.iam}>I am Juno.</p>
          <p className={Header.frontEnd} onClick={function(){navigate('portfolio/frontend')}}>Front-end <span>Developer</span></p>
          <p className={Header.awaker} onClick={function(){navigate('portfolio/awaker')}}><span>Awaker</span> at AwakeCorp</p>
          <p className={Header.hanyang} onClick={function(){navigate('portfolio/hanyang')}}>Hanyang Univ. <span>Student</span></p>          
          <p className={Header.member} onClick={function(){navigate('portfolio/hanyang')}}><span>Member</span> of Forest Asset</p>          
        </div>
      </header>
    </div>
  );
}

export default Home;
