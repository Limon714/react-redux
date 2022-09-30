import React from 'react'
import { useSearchParams } from 'react-router-dom'
const UseSearchParams = () => {

    const [searchParam, setSearchParam] = useSearchParams();
    const age = searchParam.get('age');
    const city = searchParam.get('city');

    const setAge = () => {
        setSearchParam({ age: '40', city : "Rangpur" })
    }
   
    
  return (
      <>
          <div>
              <h1>Hello useSearch</h1>
              <h3>My age is {age}</h3>
              <h3>My city is {city}</h3>
              <button onClick={setAge}>Set age</button>
          </div>
      </>
  )
}

export default UseSearchParams