import React from "react";
import "./App.less";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/apolloClient";
import { Provider } from "react-redux";
import Main from "./components/main";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  </ApolloProvider>
);

export default App;
