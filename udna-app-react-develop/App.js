import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { YellowBox } from 'react-native';
import { FRESHCHAT_APP_ID, FRESHCHAT_APP_KEY } from 'react-native-dotenv';
import { Freshchat, FreshchatConfig } from 'react-native-freshchat-sdk';

import AppNavigator from './src/navigation/AppNavigator';
import { KeyboardProvider } from './src/providers/KeyboardProvider';
import { ModalProvider } from './src/providers/ModalProvider';
import { UserProvider } from './src/providers/UserProvider';
import { udnaAPI } from './src/services/udnaAPIService';

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps',
  'RCTUIManager',
  'No stops in gradient',
  'Warning: componentWillUpdate has been renamed',
]);

const freshchatConfig = new FreshchatConfig(
  FRESHCHAT_APP_ID,
  FRESHCHAT_APP_KEY,
);
Freshchat.init(freshchatConfig);

const App = () => (
  <ApolloProvider client={udnaAPI}>
    <KeyboardProvider>
      <UserProvider>
        <ModalProvider>
          <AppNavigator />
        </ModalProvider>
      </UserProvider>
    </KeyboardProvider>
  </ApolloProvider>
);

export default App;
