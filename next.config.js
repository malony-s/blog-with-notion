const config = {
  serverRuntimeConfig: {
    notion: {
      activeUser: process.env.NOTION_USER_ID,
      token: process.env.NOTION_TOKEN_V2,
      rootPage: process.env.NOTION_ROOT_PAGE_ID,
    },
  },
  publicRuntimeConfig: {},
};

module.exports = config;
