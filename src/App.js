import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div class="container">
      <div class="row">
      <div class="col-md-4">
      <div class="card">
        <div class="card-body shadow-lg">
        <div class="image">
           <a href="https://pisoftsolution.com/login">
            <img src="https://pisoftsolution.com/media/04062021183428-logo_-_Copy-removebg-preview1.png"></img>
           </a>
        </div>
           <div class="form">
            <div class="form-group mb-2">
            <input type="text" class="form-control" placeholder="Email Address"/>
            </div>
                  
            <div class="form-group mb-2" >
             <input type="text" class="form-control" placeholder="Password"/>
            </div>
                  
            <div class="box">
              <input id="remember" type="checkbox" />
              <label>Remember me</label>
            </div>

              <button class="btn">Login</button>
          
            <div class="links">
              <h3><a href="https://pisoftsolution.com/password/reset">Forgot your password?</a></h3>
              <h3><a href="https://pisoftsolution.com/register">Sign up for an account</a></h3>
             </div>
            </div>
            </div>
          </div>
        </div>
       </div>
       </div>
    </>
  );
}
export default App;