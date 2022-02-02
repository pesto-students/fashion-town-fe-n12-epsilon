import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import config from "config";

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`GraphQl error ${message}`);
    });
  }

  if (networkErrors) {
    console.log(networkErrors);
  }
});

const link = from([errorLink, new HttpLink({ uri: config.serverUrl })]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export { client };
