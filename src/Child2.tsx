import React, { useContext } from 'react'
import Child3 from './Child3'
import { UserContext } from './context/UserContext'

const Child2 = () => {
    const data = useContext(UserContext)
    return (
        <>
            <h1>{data?.role}</h1>
        </>
    )
}

export default Child2