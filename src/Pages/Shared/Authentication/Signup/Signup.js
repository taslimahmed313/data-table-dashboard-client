import React from 'react';
import "./Signup.css";

const Signup = () => {
    return (
      <div id='signup'>
        <div>
          <div class="center">
            <h1>Sign Up</h1>
            <form>
              <div class="inputbox">
                <input type="text" required />
                <span>Name</span>
              </div>
              <div class="inputbox">
                <input type="email" required />
                <span>Email</span>
              </div>
              <div class="inputbox">
                <input type="text" required />
                <span>Password</span>
              </div>
              <div class="inputbox">
                <input type="button" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signup;