import { gql } from 'apollo-server-express';

const Input = gql`
  input emailsFilterInput {
    limit: Int
  }
`;

export default () => [Input];
