require('dotenv').config()

module.exports = {
    //  example Query: {
    //     hi: (parent, args, context, info) => 'hi'
    // }
    Query: {
        getUser: (parent, {id}, context) => {'yes'},
        allUsers: (root, args, context) => context.users.find()
    },
    Mutation: {
        createUser: (parent, {args}, context) => context.users.insert(first_name = 'yo'),
        createMessage: (parent, args, context) => {'createMessage() in databse here'},
        createChannel: (parent, args, context) => {'createChannel() in database here'}
    }
}