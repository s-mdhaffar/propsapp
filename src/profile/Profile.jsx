import React from 'react'

const Profile = ({prof ,children}) => {
    return (
        <div>
            {children}
            <h1>{prof.fullName}</h1>
            <p>{prof.bio}</p>
            <h2>{prof.profession}</h2>
        </div>
    )
}
Profile.defaultProps ={
fullName : "Guest",
bio : "Enter bio",
profession : "Enter profession"
}

export default Profile
