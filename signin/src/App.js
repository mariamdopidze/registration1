
import React, { useState } from "react";
import './App.css';


function App() {
    const[emailAddress, setEmailAddress] = useState("");
const[password, setPassword]= useState("")

const handleSubmit = ()=>{
   if(emailAddress.trim().length===0 || password.trim().length===0){
    return alert('შეავსეთ ყველა ველი')
   }

   if(password.length < 8){
    return alert ('პაროლი ნაკლებია 8 -ზე')
   }

   console.log('შენ წარმატებით გაიარე რეგისტრაცია')
    
}



  return (
    <div className="App">
     <h1>Create An Account</h1>
     <p>Create an account to enjoy all the services without any ads for free!</p>
     <div>
     <input type="text" placeholder="Email Address" onChange={(e)=>setEmailAddress(e.target.value)}/>
     <input type ="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/>
     <button onClick={handleSubmit}>Create Account</button>
     <p>Already Have An Account? Sign in</p>
     
     </div>
    </div>
  );
}
    
export default App;

