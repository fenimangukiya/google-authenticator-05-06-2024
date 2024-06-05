import React, { Component } from 'react'
import { GoogleAuthProvider, getAuth , signInWithPopup } from "firebase/auth";
import app from './Firebase';
import Register from './Component/Register';

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export class App extends Component {
 
  
GoogleHandler=()=>{
  //alert("hcgsj")
  signInWithPopup(auth, provider)
  .then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })
}
  

  render() {
    return (
      <div>
          <Register google={this.GoogleHandler}></Register>
      </div>
    )
  }
}

export default App
