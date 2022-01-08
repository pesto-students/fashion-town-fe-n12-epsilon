import React from 'react';
import './App.less';
import {ApolloProvider} from "@apollo/client";
import { client } from "./services/apolloClient";
import { Provider } from 'react-redux'
import Main from './components/main';
import store from './store';
const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
     <Main/>
     </Provider>
</ApolloProvider>
);

export default App;