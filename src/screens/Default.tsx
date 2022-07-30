import { NextPage } from "next";
import { NotionPage } from "~/components/NotionPage";

const DefaultScreen: NextPage = ({ result }: any) => {
  return <NotionPage recordMap={result} />;
};

export default DefaultScreen;
