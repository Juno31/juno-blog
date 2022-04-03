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
}

body{
  margin: 0px;
  width: 100vw;

  background: #121212;

  color: white;

  box-sizing: border-box;
}

#root{
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: flex-start;
}

`

export default Globalstyles