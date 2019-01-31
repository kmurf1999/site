
import { gql } from 'apollo-server-express';

import userModel from './_model';

const Mutation = gql`
  extend type Mutation {
    signup(email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;

export const mutationTypes = () => [Mutation];

export const mutationResolvers = {
  Mutation: {
    signup: async (_, { email, password }) => {
      if (!email) throw new Error("No Email");
      if (!password) throw new Error("No Password");

      const usr = await userModel.findOne({ email });

      if (usr) throw new Error("Exists");

      const user = await new userModel({ email });
      user.setPassword(password);
      user.save();
      return user.toAuthJSON();
    },
    login: async (_, { email, password }) => {
      if (!email) throw new Error("No Email");
      if (!password) throw new Error("No Password");

      const user = await userModel.findOne({ email });

      if (!user) throw new Error("Incorrect Email");

      if (!user.validatePassword(password))
        throw new Error("Incorrect Password");

      return user.toAuthJSON();
    },

  }
};
