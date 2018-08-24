module.exports = {
    //  example Query: {
    //     hi: (parent, args, context, info) => 'hi'
    // }
    Query: {
        getUser: (parent, {id}, context) => {'getUser() in database here'},
        allUsers: (parent, args, context) => {'getAllUsers() in database here'}
    },
    Mutation: {
        createUser: (parent, args, context) => {'createUser() in database here'},
        createMessage: (parent, args, context) => {'createMessage() in databse here'},
        createChannel: (parent, args, context) => {'createChannel() in database here'}
    }
}