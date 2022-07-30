import { GetServerSideProps } from "next";
import { NotionAPI } from "notion-client";
import getConfig from "next/config";
import { getPageTitle } from "notion-utils";
const {
  notion: { activeUser, token, rootPage },
} = getConfig().serverRuntimeConfig;
const notion = new NotionAPI({
  activeUser,
  authToken: token,
});

export default notion;

export const getServerSidePropsWithNotion: GetServerSideProps<
  any,
  { id: string }
> = async ({ query }) => {
  const { id = rootPage } = query;
  const result = await notion.getPage(String(id));

  return {
    props: {
      result,
      pageInfo: {
        title: getPageTitle(result),
      },
    },
  };
};
