import * as React from 'react';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import globalStyle from 'src/common/styles/global';
import theme from 'src/common/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
export default MyApp;
