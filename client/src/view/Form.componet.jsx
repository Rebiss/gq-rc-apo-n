import React, {useState, useEffect} from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {GET_ALL_USERS, GET_ONE_USER} from './Query/User.query'
import {CREATE_USERS} from './Mutation/User.mutation'
import './Main'

export const Form = () => {
    const {data, loading, refetch} = useQuery(GET_ALL_USERS),
        {data:oneUser, loading:loadingOneUser} = useQuery(GET_ONE_USER, {variables: {id: 1}}), //change
        [newUser] = useMutation(CREATE_USERS),
        [users, setUsers] = useState([]),
        [username, setUsername] = useState(''),
        [age, setAge] = useState(0),
        userNameAction = ev => setUsername(ev.target.value),
        userAgeAction = ev => setAge(ev.target.value);

    useEffect( () => {
        if(!loading) setUsers(data.getAllUsers)
        if(loading) return <p>Loading data...</p>
    }, [data])

    const addUser = ev => {
        ev.preventDefault();
        newUser({
            variables: { input: { username, age }}})  
                .then(({data}) => {
                    console.log('>>>>DATA', data);
                    setUsername('')
                    setAge(0)
                })
    }

    const getAll = ev => {
        ev.preventDefault();
        refetch()
    }

    return (
        <>
        <form className="form-f"> 
            <input value={username} onChange={userNameAction} className="form-i" type="text" />
            <input value={age} onChange={userAgeAction}  className="form-i" type="number" />
            <div className="btn-d">
                <button onClick={ ev => addUser(ev) } className="btn-c"> Create </button>
                <button onClick={ ev => getAll(ev) } className="btn-c"> Get </button>
            </div>
        </form>
        <div>
            {users.map(user => (
                <div className="user-list" key={user.id}>{` id: ${user.id}, name: ${user.username},  age: ${user.age} `}</div>
            ))}
        </div>
        </>
    )
}