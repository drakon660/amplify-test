import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';

const auth = {
  Cognito:{
    userPoolClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID
  }
}
const awsmobile = {
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "us-east-1:5fec028a-2861-4e6b-a38d-659deb06af42",
  "aws_user_pools_id": "us-east-1_G7QZtxQ9i",
  "aws_user_pools_web_client_id": "54olg979trkdbgrgifqdn86jn"
};

Amplify.configure({Auth:auth});
console.log(Amplify.getConfig());
console.log({Auth:auth});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
