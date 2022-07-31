import globalStyles from "~/globalStyles";
import colors from "~/theme";
import { ThemeProvider } from "@emotion/react";
import NextProgress from "~/components/NextProgress";
import Head from "next/head";
import AppLayout from "~/layouts";
import "react-notion-x/src/styles.css";
import "~/components/NotionPage/style.css";

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Head>
      <link rel="favicon" href="./favicon.ico" />

      <title>{`Malony | ${pageProps.pageInfo?.title}`}</title>
    </Head>
    <ThemeProvider theme={colors}>
      <NextProgress />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  </>
);

export default App;
