

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require("graphql");

let schema = (db) => {
  let messageType = new GraphQLObjectType({
    name: "message",
    fields: () => ({
      id: { type: GraphQLInt },
      message: { type: GraphQLString },
      message_date: { type: GraphQLString },
      user: { 
        type: userType,
        resolve: (parentValue, args) => {
          return axios.
      } },
    })
  })

    //this is a defined parameter for the main schema template
    let userType = new GraphQLObjectType({
        // name gets defined in the explorer tool
    name: "user",
    fields: () => ({
      id: { type: GraphQLInt },
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone_number: { type: GraphQLString },
      profile_img: { type: GraphQLString }
    })
  });

//this is the main template
  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        //this name is what is defined in the explorer tool
      name: "usersone",
      fields: () => ({
          //this array(GraphQLList) can now be 'query'ed
        users: {
          type: new GraphQLList(userType),
          //send in a promise from the db, this will be what is sent to the query
          resolve: () => db.users.find()
        }
      })
    })

//     mutation: new GraphQLObjectType({
//         name: "Mutation",
//         fields: () => ({
//             addUser: {

//             }
//         })
//     })
  });
  return schema
};
module.exports = schema;
