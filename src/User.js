import React from 'react'

const User = (props) => {
   const {data} = props
  return (
      <div>
          <h1> Name is {data.name} and age is {data.age}</h1>
    </div>
  )
}

export default User
