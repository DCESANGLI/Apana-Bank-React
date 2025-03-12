import { useState } from "react";
import "./user.style.css";
import axios from "axios";

let Login = () => {
  let [data, setData] = useState({email:"", password:""});

  let readInput = (event) => {
    const {name, value} = event.target;

    setData({...data, [name]:value});
  }

  let login_click = async() => {
      await axios.post('http://localhost:4949/api/user/login', data)

      .then(res=>{
        alert("Login Successfull");
      })

      .catch(err=>{
        console.log(JSON.stringify(err.response));
        alert("Server Side Error");
      })
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div class="container1 my-3">
          <h2>Bank Account Login</h2>
      
            

            <div class="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Enter email" onChange={readInput}/>
              <div class="error" id="emailError"></div>
            </div>

           
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                onChange={readInput}
              />
              <div class="error" id="passwordError"></div>
            </div>

            <button class="button1" onClick={()=>login_click()}>
              Login
            </button>
         
        </div>
      </div>
    </>
  );
};

export default Login;
