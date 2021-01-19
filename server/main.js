import express from 'express'
import cors from 'cors'
import {graphqlHTTP} from 'express-graphql'
import {schema} from './schema/schema.gql.js'
import {resolver} from './helper/resolver.graphql.js'

const port = process.env.PORT || 3011,
    app = express();

app.use(cors())
app.use('/gq', graphqlHTTP({
    graphiql: true, 
    schema,
    rootValue: resolver,
}))

app.listen(port, () => console.log(`Server is ruuning in port ${port}`))