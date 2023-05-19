const { gql } = require('@apollo/client');

const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

module.exports = {
  QUERY_USER,
  QUERY_ME
};
