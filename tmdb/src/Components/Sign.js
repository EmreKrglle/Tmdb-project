import React from 'react'

export default function Sign(props) {
    const setName= props.setName;
    const userName= props.userName;
    const setPassword= props.setPassword;
    const password= props.password;


  function sign(e){
    e.preventDefault()
    alert(userName,password)


  }
  console.log(userName)
  return (
    <div>
        
        <form onSubmit={sign}>
            <label for="name" >UserName</label>
          <input  value={userName}id="name" onChange={(e)=> setName(e.target.value)}></input> 
          <br></br>
          <label for="password" >password</label>  
          <input type='password' value={password} id='password'  onChange={(e)=> setPassword(e.target.value)}></input> 
          <br></br>
          <button type='submit'> sign</button>   
        </form>
         {userName && 
         <h1>{userName}</h1>
         }
        
    </div>
  )
}
