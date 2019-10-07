import * as React from "react";
import { Query } from "react-apollo";
// import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { User } from "../interfaces/generated/graphql";

export const allQuery = gql`
  query {
    users {
      id
      username
      comments {
        id
        message
      }
    }
  }
`;

// export const allMutations = gql`
//   mutation CreateUser($id: String!) {
//     deleteUser(id: $id) {
//       username
//     }
//   }
// `;
// let input;

const App: React.FC<any> = () => (
  <div>
    <Query query={allQuery}>
      {({ loading, error, data }): any => {
        if (error) return <div>Error loading posts.</div>;
        if (loading) return <div >Loading</div>;
        const users: User[] = data.users;
        if (data && data.users) {
          return (
            <div className={'asd qwe'}>
              {" "}
              here{" "}
              {data && data.users ? (
                <div>
                  {users.map((user: User, index) => (
                    <div key={user.id}>
                      {index} ){user.username} {user.id}
                      <div>
                        {user.comments.map(comment => (
                          <div key={comment.id}>{`id ${comment.id} message: ${
                            comment.message
                          }`}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                "wait"
              )}
            </div>
          );
        }
      }}
    </Query>
    {/* <Mutation mutation={allMutations} refetchQueries={[{ query: allQuery }]}> */}
    {/* {CreateUser => ( */}
    {/* <div> */}
    {/* <form */}
    {/* onSubmit={e => { */}
    {/* e.preventDefault(); */}
    {/* CreateUser({ */}
    {/* variables: { id: `${input.value}` }, */}
    {/* }); */}
    {/* input.value = ""; */}
    {/* }} */}
    {/* > */}
    {/* <input */}
    {/* ref={node => { */}
    {/* input = node; */}
    {/* }} */}
    {/* /> */}
    {/* <button type="submit">Add Todo</button> */}
    {/* </form> */}
    {/* </div> */}
    {/* )} */}
    {/* </Mutation> */}
  </div>
);

export default App;
