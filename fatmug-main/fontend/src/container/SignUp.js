import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect, NavLink } from "react-router-dom";
function SignUp()
{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        re_password: "",
    } );
    const { name, email, password, re_password } = formData;
    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


    return (
      
        <div className="container ">
        <div className="row justify-content-center align-items-center mt-3 ">
          <div className="col-10 col-md-8 col-lg-4  pb-5 pt-5 pl-3 pr-3 mt-5">
            <div className="panel panel-primary mt-1">
              <div className="panel-heading">  
                <h1 className ="text-center">Sign Up</h1>
                <p className ="text-center">Create your Account</p>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name*"
                      name="name"
                      value={name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email*"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password*"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      minLength="6"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirm Password*"
                      name="re_password"
                      value={re_password}
                      onChange={(e) => onChange(e)}
                      minLength="6"
                      required
                    />
                  </div>
                  <button className="btn btn-secondary d-flex justify-content-center" type="submit">
                    Register
                  </button>
                </form>
                <p className="mt-3">
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}
export default SignUp; 