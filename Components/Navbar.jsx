import React from "react";
import reactLogo from "../src/assets/react.svg"

function Navbar() {
  return (
  <div style={{display: "flex", justifyContent:"space-between", alignItems:"center", height: 130, padding: "30 25", backgroundColor:"#21222A", width: "auto", fontFamily: "Inter, sans-serif"}}> 
    <img src={reactLogo} style={{width: 60, paddingLeft: 50}}></img>
    <h1 style={{marginRight: "auto", color:"#61DAFB", marginLeft: 20, fontSize: "2.5rem"}}>React Facts</h1>
    <h2 style={{paddingRight: 50, color:"white"}}>React Course - Project 1</h2>
  </div>)
}

export default Navbar;
