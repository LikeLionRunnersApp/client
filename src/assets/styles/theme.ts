import { Theme } from "@emotion/react";

const palette = {
  orange: "#FF9704",
  yellow: "#FFE76A",
  lightGreen: "#FFC573",
  darkGray: "#989491",
  gray: "#D9D9D9",
  lightGray: "#F8F8F8",
};

const fontSize = {
  p_h1: "32px",
  p_h2: "16px",
  p_h3: "14px",
  p_h4: "12px",
  p_h5: "10px",
};

const btnFontSize = {
  "btn_font_size--sm": "12px",
  "btn_font_size--lg": "20px",
};

const theme: Theme = {
  palette,
  fontSize,
  btnFontSize,
};

export default theme;
