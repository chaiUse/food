import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Test = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('name'));
  const name =searchParams.get('name')
  return (
    <div>
      {name}
    </div>
  )
}

export default Test