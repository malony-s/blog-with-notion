import React from "react";
import Head from "next/head";
import "react-notion-x/src/styles.css";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { PageLink } from "./styled.component";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);

const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
);
export const NotionPage = ({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) => {
  if (!recordMap) {
    return null;
  }

  return (
    <>
      <NotionRenderer
        disableHeader
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        components={{
          Code,
          Collection,
          Equation,
          Pdf,
          nextImage: Image,
          nextLink: Link,
          PageLink: PageLink,
        }}
      />
    </>
  );
};
