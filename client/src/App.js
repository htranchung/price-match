import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Profile from './pages/Profile';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Aisearch from "./components/Aisearch";
import Aichat from "./components/Aichat";
import SearchPage from "./pages/Search";
import Checkout from "./pages/Checkout";
import CheckoutForm from "./components/CheckoutForm";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NAj8fB9d7BNivffVL6Z6HlcA5jNT2lNmv8OMtKbogyx6ePOfewPlCtfcsgioeXZgq1AHOhgEC9qhFRiUxhu9wzw00z3Krv8Hm');

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const App = () => {

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
<Elements stripe={stripePromise} options={options}>
      <CheckoutForm />

    <ApolloProvider client={client}>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Aisearch" element={<Aisearch />} />
            {/* <Route 
                path="/me"
                element={<Profile />}
              /> */}
              {/* <Route 
                path="/profiles/:username"
                element={<Profile />}
              /> */}
            <Route path="/Aichat" element={<Aichat />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/SearchPage" element={<SearchPage />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
    </Elements>
  );
};

export default App;
