// pages/_app.tsx
import type { AppProps } from "next/app";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from '@/amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';

Amplify.configure(config);

function App({ signOut, user, Component, pageProps }: WithAuthenticatorProps & AppProps) {
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <Component {...pageProps} />
    </>
  );
}

export default withAuthenticator(App);