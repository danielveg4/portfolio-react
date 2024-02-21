import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  :root {
    --gradient: linear-gradient(
    to right,
    #dddddd,
    #cecbcb,
    #bcbbbb,
    #e9e9e9,
    #f4f3f3,
    #dddddd,
    #bcbcbc,
    #c0c0c0,
    #ebeaea
  );
  }

  :root {
    --principal: #2c2830;
  }

  :root {
    --secundary: #1c191f;
  }

  html {
  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
  color: #dddddd;
  background: #dddddd;
  background-image: var(--gradient);
  background-size: 400%;
  animation: fondo-anim 20s infinite alternate;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  background-color: #dddddd;
  font-family: "Encode Sans Condensed", sans-serif;
}
@keyframes fondo-anim {
  0% {
    background-position: left;
  } 
  100% {
    background-position: right;
  }
}
`;
