import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

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

const link = from([errorLink, new HttpLink({ uri: "http://localhost:5001/" })]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export { client };

// const client = ...

// const LOAD_USER = gql`
//   query getUser($id: ID) {
//     user(id: $id) {
//       id
//       username
//     }
//   }
// `;

// function App() {
//   const Id = "1";
//   const { error, loading, data } = useQuery(LOAD_USER, {
//     variables: { id: 1 },
//   });

//   useEffect(() => {
//     console.log(data);
//   }, [data]);
