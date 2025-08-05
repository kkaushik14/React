import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-orange-700 text-2xl text-center p-10'>User: {userid}</div>
  )
}

export default User