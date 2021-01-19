import {gql} from '@apollo/client'

export const CREATE_USERS = gql`
    mutation createUser ($input: UserInput ) {
            createUser(input: $input) {
                id, username, age
            }
        }
    
`;