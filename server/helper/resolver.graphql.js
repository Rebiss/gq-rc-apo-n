// Database implementation.
const users = [
    {id: 1, username: "Valodik Beglaryan", age: 28},
    {id: 2, username: "Mustafa Sandal", age: 45},
    {id: 3, username: "Benjamin Rustamyan", age: 36}
]

const createUser = input => {
    const id = Date.now()
    return { id, ...input }
}

export const resolver = {
    getAllUsers: () => { return users },

    getUser: ({id}) => {
        users.find(user => user.id == id)
    },

    createUser: ({input}) => {
        const user = createUser(input)
        users.push(user)
        return user
    }
}