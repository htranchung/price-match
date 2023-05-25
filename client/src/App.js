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
import Profile from './pages/Profile';
import SingleThought from './pages/SingleThought';
// new
import Payment from "./components/StripePayment/Payment";
import Completion from "./components/StripePayment/Completion";
import HowItWorks from "./components/HowItWorks";
import OurTeam from "./components/OurTeam";
// 
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
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Aisearch" element={<Aisearch />} />
            <Route 
                path="/me"
                element={<Profile />}
              />
               <Route 
                path="/profiles/:username"
                element={<Profile />}
              />
              <Route 
                path="/thoughts/:thoughtId"
                element={<SingleThought />}
              />

              {/* <Route path="/HowItWorks" element={<HowItWorks />} />
              <Route path="/OurTeam" element={<OurTeam />} /> */}

            <Route path="/Aichat" element={<Aichat />} />
            <Route path="/Signup" element={<Signup />} />

            <Route path="/SearchPage" element={<SearchPage />} />
            {/* new */}
            <Route path="/Payment" element={<Payment />} />
            <Route path="/api/Completion" element={<Completion />} />
            {/*  */}
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;
