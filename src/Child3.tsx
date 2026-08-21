import React from 'react'

const Child3 = ({ user }) => {
    return (
        <>
            <h1>Name:{user.name}</h1>
            <h1>Username:{user.username}</h1>
            <h1>Email:{user.email}</h1>
        </>
    )
}

export default Child3