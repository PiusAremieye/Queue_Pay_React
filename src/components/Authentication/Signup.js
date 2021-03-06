import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { authContext } from "../../auth-context/authProvider";
import classnames from 'classnames';

function SignUp() {
  const { addUsers, errors, dispatch } = useContext(authContext);
  const history = useHistory();
  const [state, setstate] = useState({
    fullName: "",
    phoneNumber: "",
    username: "",
    password: ""
  });

  useEffect(() => {
    dispatch({type:"REMOVE_ERROR"})
  }, [])

  const handleInput = ({ target: { name, value } }) => {
    setstate({
      ...state,
      [name]: value
    });
  };
  
  const handleSignUp = e => {
    e.preventDefault();
    addUsers(state, history);
  };

  return (
    <div className="signup">
      <div className="container">      
        <div className="row">
          <div className="col-md-8 m-auto">
            <h3 className="diaplay-4 text-center">Register here</h3>
            <br />
            <form onSubmit={handleSignUp} className="was-validated">
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid":errors                    
                  })}
                  placeholder="Enter Full Name"
                  name="fullName"
                  onChange={handleInput}
                />
                {errors ?
                  <div className="invalid-feedback text-left">{errors.fullName}</div>
                  : <div className="valid-feedback">Looks good!</div>
                }
              </div>
              <div className="form-group">
                <input
                  type="phone"                  
                  className={classnames("form-control form-control-lg", {
                    "is-invalid":errors
                  })}
                  placeholder="Enter Phone Number"
                  name="phoneNumber"
                  onChange={handleInput}
                />
                {errors ?
                  <div className="invalid-feedback text-left">{errors.phoneNumber}</div>
                  : <div className="valid-feedback">Looks good!</div>
                }
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid":errors
                  })}
                  placeholder="Enter Email"
                  name="username"
                  onChange={handleInput}
                />
                {errors ?
                  <div className="invalid-feedback text-left">{errors.email}</div>
                  : <div className="valid-feedback">Looks good!</div>
                }
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid":errors
                  })}
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleInput}
                />                
                {errors ?
                  <div className="invalid-feedback text-left">{errors.password}</div>
                  : <div className="valid-feedback">Looks good!</div>
                }
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-lg btn-block btn-success mt-4"
                />
                <p className="mt-4">
                  Already registered?<Link to="/login"> Click here </Link> to login in
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
