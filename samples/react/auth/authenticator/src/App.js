import React from 'react';
import './App.css';
import logo from './logo.svg';
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
//import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

//Amplify.configure(awsconfig);

const App = () => {

  // Use the value of authStatus to decide which page to render
 return (
    <>
       <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </>
  );
};

export default App;
