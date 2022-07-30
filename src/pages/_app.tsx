import globalStyles from "~/globalStyles";
import colors from "~/theme";
import { ThemeProvider } from "@emotion/react";
import NextProgress from "~/components/NextProgress";
import Head from "next/head";
import AppLayout from "~/layouts";

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Head>
      <title>Malony | {pageProps.pageInfo?.title}</title>
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
