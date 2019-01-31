import { gql } from 'apollo-server-express';

const Input = gql`
  input usersFilterInput {
    limit: Int
  }
`;

export default () => [Input];
