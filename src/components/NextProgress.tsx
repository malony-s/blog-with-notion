import React from "react";
import NextNProgress from "nextjs-progressbar";
import { useTheme } from "@emotion/react";

const NextProgress = () => {
  const { palette } = useTheme();
  return (
    <NextNProgress
      color={palette.primary}
      startPosition={0.3}
      stopDelayMs={200}
      height={2}
      showOnShallow={true}
    />
  );
};

export default NextProgress;
