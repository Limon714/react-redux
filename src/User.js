import React from 'react'

const User = (props) => {
   const {data} = props
  return (
      <div>
          <h1>{data.name} {data.age}</h1>
    </div>
  )
}

export default User