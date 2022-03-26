import { createGlobalStyle } from "styled-components";


const Globalstyles = createGlobalStyle`

@import ;

@font-face{
    font-family: 'Roboto Slab', serif;
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Roboto+Slab:wght@200;300;400;500;600;700;800&display=swap');
}

html{
  height: 100vh;
  width: 100vw;
  // overflow: hidden;
}

body{
  margin: 0px;
  width: 100vw;
  height: 100vh;
}

#root{
  height: 100vh;
  width: 100vw;

  box-sizing: border-box;
}

`

export default Globalstyles