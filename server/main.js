const express = require('express')
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema.gql.js')
const users = [{id: 1, username: "Valodik", age: 28}]

const app = express()
app.use(cors())

const root = {
    getAllUsers: () => {
        return users
    },
    getUser: ({id}) => {
        users.find(user => user.id == id)
    }
}


app.use('/gq', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
}))

const port = process.env.PORT || 3011


app.listen(port, () => console.log(`Server is ruuning in port ${port}`))