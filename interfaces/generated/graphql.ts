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

export type Query = {
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  id: Scalars["String"];
  username?: Maybe<Scalars["String"]>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};
