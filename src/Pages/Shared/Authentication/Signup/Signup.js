import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import "./Signup.css";

const Signup = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            
            const profile = { displayName: name };
            updateUser(profile)
        .then(() => {
          saveUserData(name, email)
        //  setLoading(false)
          form.reset();
          toast.success("Sign Up Successfully");
         navigate(from, { replace: true });
        }) 
        .catch(e => console.log(e)) 
        console.log(user);  
        })
        .catch(e => {
            console.error(e)
            toast.error(e.message)
        })
    }


    const saveUserData = (name, email) => {
      const user = { name, email, role: "user" };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };


    return (
      <div id="signup">
        <div>
          <div className="center">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
              <div className="inputbox">
                <input type="text" required name="name" />
                <span>Name</span>
              </div>
              <div className="inputbox">
                <input type="email" required name="email" />
                <span>Email</span>
              </div>
              <div className="inputbox">
                <input type="password" required name="password" />
                <span>Password</span>
              </div>
              <div className="button">
                <input type="submit" value="Sign Up" />
              </div>
              <p>
                Already have an account? please{" "}
                <Link to="/login">Login</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signup;