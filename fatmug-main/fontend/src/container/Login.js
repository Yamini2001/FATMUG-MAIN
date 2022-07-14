import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from "react-router-dom";
function Login() {
    return (
     
        <div className="container ">
          <div className="row justify-content-center align-items-center mt-3 ">
            <div className="col-10 col-md-8 col-lg-4  pb-5 pt-5 pl-3 pr-3 mt-5">
              <div className="panel panel-primary mt-1">
                <div className="panel-heading">
                  
                  <h3 className="text-center">Login </h3>
                </div>
                <div className="panel-body">
                  <form>
                    <div className="form-group">
                      <label>Name:</label>
                      <input type="text" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                      <label>Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                      />
                    </div>
                    <p></p>
  
                    <button type="submit" className="btn btn-secondary align-self-center">
                      Submit
                    </button>
                            </form>
                            <p className="mt-3">
                  Create new Account? <Link to="/SignUp">Sign Up</Link>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    );
  }
  
  export default Login;
  