import '@/styles/globals.css';

import { AppProps } from 'next/app';
import { useRef } from 'react';
import { setConfiguration } from 'react-grid-system';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { DehydratedState, Hydrate } from 'react-query/hydration';

import { ThemeProvider } from '@/context/Theme';

type MyAppProps = AppProps & { dehydrateState: DehydratedState };

function MyApp({ Component, pageProps, dehydrateState }: MyAppProps): JSX.Element {
  const queryClientRef = useRef<null | QueryClient>(null);
  setConfiguration({
    gutterWidth: 32,
  });
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={dehydrateState}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
