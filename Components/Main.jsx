import React from "react";

function Main() {
  return (
    <div style={{fontSize: "2.5rem"}}>
      <main style={{backgroundColor: "#282D35", height: 500, color:"white", paddingLeft: 100}}>
      <h1 style={{paddingTop: 60}}>Fun facts about React</h1>
            <ul style={{paddingLeft: 80, lineHeight: "60px", paddingBlock: "25px", maxWidth: "800px"}}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
      </main>
    </div>
  );
}

export default Main;
