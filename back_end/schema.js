const {gql} = require('apollo-server')
module.exports = (gql`
    type Channels {
        id: Int!
        channel_name: String!
        users: [users!]!
        messages: [Messages!]!
    }
    
    type Messages {
        id: Int!
        message: String!
        user: users!
        channel: Channels!
    }
    
    type users {
        id: Int!
        first_name: String
        last_name: String
        phone_number: String
        email: String
        profile_img: String
        role_id: Permissions
    }
    
    type Permissions {
        id: Int!
        access_level: String!
    }
    
    type Query {
        getUser(id: Int!): users!
        allUsers: [users!]!
    }
    
    type Mutation {
        createChannel(channel_name: String!): Boolean!
        createUser(username: String!, email: String!, password: String!): users!
        createMessage(message: String!): Boolean!
    }
    
`);
