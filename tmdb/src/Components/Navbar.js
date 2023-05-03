import React, { useState } from "react";
import {Link} from "react-router-dom"
export default function Navbar() {
  const [text,setText]=useState("")
  const handleChange= (e)=>{
    e.preventDefault();
    alert(text)

  }
    
 
  
  return (
    <div className="navbar1">
      <div className="navbar">
        <Link className="mainNav" to="/">
          MovieMood
        </Link>
        <Link to="about"> About us</Link>
        <Link to="asdf"> Menu</Link>
        <a href="asdas">Gumbegum</a>
      </div>
      <form className="search" onSubmit={handleChange}
      >
        <input type="text" value={text} placeholder="search.." onChange={(e)=> setText(e.target.value)} ></input>
        <input type="submit"/>
      </form>
    </div>
  );
}
