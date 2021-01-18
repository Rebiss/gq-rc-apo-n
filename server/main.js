const express = require('express')
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
    graphql: true,
}))

const port = process.env.PORT || 3011


app.listen(port, () => console.log(`Server is ruuning in port ${port}`))