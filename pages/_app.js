import Head from "next/head";

import Layout from "../components/Layout/Layout";
import NextNProgress from "nextjs-progressbar";

import { Provider } from "react-redux";
import store from "../store/index";

import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Layout>
            <Head>
              <title>Black Diamond</title>
              <meta
                name="description"
                content="black diamond clothing website"
              />
            </Head>
            <NextNProgress color="#00ACC1" options={{ showSpinner: false }} />
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
