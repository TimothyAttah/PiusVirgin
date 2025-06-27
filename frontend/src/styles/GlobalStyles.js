import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-black-900: #000000;
    --bg-black-100: #dddddd;
    --bg-black-50: #eff0f4;
    --bg-opacity: rgba(255, 255, 255, 0.5);
    --text-black-900: #000000;
    --text-black-700: #555555;
    --text-black-600: #666666;
    --text-black-300: #bbbbbb;
    --text-color: #000;

  }

 body.dark {
  --bg-black-900: #ffffff;
  --bg-black-100: #353535;
  --bg-black-50: #2b2c2f;
  --bg-opacity: rgba(43, 44, 47, 0.5);
  --text-black-900: #ffffff;
  --text-black-700: #ffffff;
  --text-black-600: #bbbbbb;
  --text-color:#fff;

 }

 html,body{
  font-size: 10px;
}

body {
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: var(--bg-black-50);
  &::-webkit-scrollbar {
		display: none;
	}
  border: 2px solid red;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
:before, :after{
   box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  vertical-align: middle;
  max-width: 100%;
}
button{
  outline: none;
  border: none;
  cursor: pointer;
}

`;

export default GlobalStyles;
