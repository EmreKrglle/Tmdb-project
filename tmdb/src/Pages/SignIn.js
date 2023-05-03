import React, { useState } from 'react'
import Sign from '../Components/Sign'

export default function SignIn() {
  const[userName,setName]=useState()
  const[password,setPassword]=useState()
  return (
    <div>
      <Sign setName={setName} setPassword={setPassword} userName={userName} password={password}></Sign>
    </div>
  )
}
