import { css, Global } from "@emotion/react";

const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100vh;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 16px;
        user-select: none;
        overscroll-behavior-y: none;
        font-family: "Noto Sans KR", sans-serif;
        --notion-font: "Noto Sans KR", sans-serif;
      }
    `}
  />
);

export default globalStyles;
