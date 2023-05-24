const express = require('express');
const { ApolloServer } = require ('apollo-server-express');
const path = require ( 'path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers} = require('./schemas/index.js');
const {connection} = require( './config/connection');

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('pk_test_51NAj8fB9d7BNivffVL6Z6HlcA5jNT2lNmv8OMtKbogyx6ePOfewPlCtfcsgioeXZgq1AHOhgEC9qhFRiUxhu9wzw00z3Krv8Hm');

const paymentIntent = await stripe.paymentIntents.create({
  amount: .01,
  currency: 'usd',
  automatic_payment_methods: {
    enabled: true,
  },
});

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/secret', async (req, res) => {
  const intent = // ... Fetch or create the PaymentIntent
  res.json({client_secret: intent.client_secret});
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
