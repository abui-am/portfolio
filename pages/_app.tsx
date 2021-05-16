import { AppProps } from 'next/app';
import { DehydratedState, Hydrate } from 'react-query/hydration';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRef } from 'react';
import '@/styles/globals.css';
import { ThemeProvider } from '@/context/Theme';
import { setConfiguration } from 'react-grid-system';

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
