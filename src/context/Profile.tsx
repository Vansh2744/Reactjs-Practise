import React, { type ReactNode } from 'react'
import { UserContext } from './UserContext'

const Profile = ({ children }: { children: ReactNode }) => {
    const user = {
        name: "Vansh Choudhary",
        role: "Full Stack Developer",
        company: "Open to Work",
    };
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default Profile