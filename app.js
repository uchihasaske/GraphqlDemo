const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

const app = express();
mongoose.connect(`mongodb+srv://akash:${process.env.MONGO_PASSWORD}@learning-xbz2f.mongodb.net/test`,{ useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log(`Connection successfull`)).catch(err =>console.log( `Connection failed ${err}`));

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}));

app.listen(3000, () => "Server is running on port 3000!!");