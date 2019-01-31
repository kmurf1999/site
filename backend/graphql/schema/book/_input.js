import { gql } from 'apollo-server-express';

const Input = gql`
  input booksFilterInput {
    limit: Int
  }
`;

export default () => [Input];
