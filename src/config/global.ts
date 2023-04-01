import { createGlobalStyle } from "styled-components";

// converts pixels to viewport width.
const px2vw = (size: number, width = 1440) => `${(size / width) * 100}vw`;


export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: ${px2vw(24)};
  
        @media (min-width: 768px) {
          font-size: ${px2vw(18)};
        }
  
        @media (min-width: 1024px) {
          font-size: ${px2vw(16)};
        }
      }    
`