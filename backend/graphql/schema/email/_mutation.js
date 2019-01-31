import { gql } from 'apollo-server-express';

import transporter from '../../../mailer';
import emailModel from './_model';

const hostEmail = process.env.EMAIL_AUTH_USER;

const Mutation = gql`
  extend type Mutation {
    sendEmail(name: String!, from: String!, message: String!): Email
  }
`;

export const mutationTypes = () => [Mutation];

export const mutationResolvers = {
  Mutation: {
    sendEmail: async (_, { from, name, message }) => {
      if (!from) throw new Error("No Email");
      if (!message) throw new Error("No Message");
      if (typeof name === 'undefined') name = '';

      const messageConfig = {
        to: 'kmurf1999@gmail.com',
        from: hostEmail,
        subject: `Work Email from ${name} - ${from}`,
        body: message,
        html: `<p>${message}</p>`,
      };

      const email = await new emailModel({
        from,
        to: messageConfig.from,
        subject: messageConfig.subject,
        name,
        message,
      });

      await transporter.sendMail(messageConfig, (err, info) => {
        if (err) throw new Error("Message Send Failure");
      });

      return email.toGraph();
    }
  }
};
