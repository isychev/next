import { User } from "../interfaces/generated/graphql";
import CommentModel, { CommentMongoose } from "./models/comment";
import DataLoader from 'dataloader';

const express = require("express");
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express");


const { importSchema } = require('graphql-import');
const GraphQlSchema = importSchema('./graphql/schema/schema.graphql');


const mongoose = require("mongoose");
require("./mongo");
const UserMongo: any = require("./models/user");


const commentDataLoader: DataLoader<string, CommentMongoose[]> = new DataLoader(
  async (ids: string[]) => {
    const allComments = await CommentModel.find({
      userId: { $in: ids.map(mongoose.Types.ObjectId) },
    });
    return ids.map(
      (id: string): CommentMongoose[] =>
        allComments.filter(
          (el: CommentMongoose) => String(el.userId) === String(id),
        ),
    );
  },
);

function createRequestContext() {
  return {
    dataloaders: {
      comments: commentDataLoader,
    },
  };
}

const resolvers = {
  Query: {
    users: (): User[] => UserMongo.find(),
  },
  User: {
    comments: (user1: any, _: any, context: any) =>
      context.dataloaders.comments.load(user1.id),
  },

  // Mutation: {
  //   createUser: (_: any, { id, username }: any) =>
  //     UserMongo.create({ id, username, password: `${Math.random()}` }),
  //   updateUser: (_: any, { id, username }: any) =>
  //     UserMongo.findOneAndUpdate(id, { username }),
  //   deleteUser: () => UserMongo.create({ username: `${Math.random()}` }),
  //   await User.findByIdAndDelete(id)s
  // },
};

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs: [GraphQlSchema],
    resolvers,
  }),
  context: createRequestContext(),
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
