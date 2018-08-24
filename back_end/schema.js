const {gql} = require('apollo-server')
module.exports = gql`
    type Channels {
        id: Int!
        channel_name: String!
        users: [Users!]!
        messages: [Messages!]!
    }
    
    type Messages {
        id: Int!
        message: String!
        user: Users!
        channel: Channels!
    }
    
    type Users {
        id: Int!
        first_name: String!
        last_name: String!
        phone: String!
        email: String!
        profile_image: String
        role: Permissions!
    }
    
    type Permissions {
        id: Int!
        access_level: String!
    }
    
    type Query {
        getUser(id: Int!): Users!
        allUsers: [Users!]!
    }
    
    type Mutation {
        createChannel(channel_name: String!): Boolean!
        createUser(username: String!, email: String!, password: String!): Users!
        createMessage(message: String!): Boolean!
    }
    
`;
