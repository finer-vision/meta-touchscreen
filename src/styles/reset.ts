import { createGlobalStyle } from "styled-components/macro";
import { fluidRange } from "polished";
import vars from "./vars";

export default createGlobalStyle`
  @font-face {
        font-family: "PT Sans Caption";
        src: url("./assets/fonts/PTSans-CaptionBold.woff2") format("woff2"),
          url("./assets/fonts/PTSans-CaptionBold.woff") format("woff");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "PT Sans Caption";
        src: url("./assets/fonts/PTSans-CaptionBold.woff2") format("woff2"),
          url("./assets/fonts/PTSans-CaptionBold.woff") format("woff");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "PT Sans Caption";
        src: url("./assets/fonts/PTSans-Caption.woff2") format("woff2"),
          url("./assets/fonts/PTSans-Caption.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "PT Sans Caption";
        src: url("./assets/fonts/PTSans-Caption.woff2") format("woff2"),
          url("./assets/fonts/PTSans-Caption.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "PT Sans Caption";
        src: url("./assets/fonts/PTSans-CaptionBold.woff2") format("woff2"),
          url("./assets/fonts/PTSans-CaptionBold.woff") format("woff");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "PT Sans Caption";
        src: url("./assets/fonts/PTSans-Caption.woff2") format("woff2"),
          url("./assets/fonts/PTSans-Caption.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

  :root {
    --gap: 1rem;
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-ebony-clay: #1F2B32;
    // General transition speed
    --speed: 350ms;
    --opacity: 0.5;
    // General transition timing-function (easing)
    --ease: ease;
    --z-index-modal: 1;
    --z-index-actions: 2;
    --z-index-side-modal: 3;
	  --circular-chart-stroke-width: 1.5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    user-select: none;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    /* Disable overscroll history navigation (touch gesture) */
    overscroll-behavior: none;
    overflow: hidden;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html {
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: `${vars.rootSize * 0.8}px`,
        toSize: `${vars.rootSize}px`,
      },
      `${vars.responsiveMin}px`,
      `${vars.responsiveMax}px`
    )};
    font-family: "PT Sans Caption", system-ui, sans-serif;
    font-weight: normal;
    line-height: 1.2;
    color: #fefefe;
  }

  body {
    background: url(./assets/background.png);
  }

  input, textarea, button {
    background-color: #fefefe;
    color: #1e1e1e;
  }

  button {
    border: none;
    padding: 0.25em 0.5em;
    cursor: pointer;
  }

  svg, img {
    height: auto;
  }
`;
