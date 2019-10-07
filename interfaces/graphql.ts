type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  id?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  createUser: User;
  updateUser: User;
  deleteUser: User;
};

export type MutationCreateUserArgs = {
  id: Scalars["String"];
  username1: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  id: Scalars["String"];
  username1?: Maybe<Scalars["String"]>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"];
};

export type Query = {
  users?: Maybe<Array<User>>;
  user?: Maybe<User>;
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type User = any;
