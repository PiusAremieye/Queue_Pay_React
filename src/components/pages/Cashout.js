import React, { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { authContext } from "../../auth-context/authProvider";

function Cashout() {    
  const history = useHistory()
  const { isAuthenticated } = useContext(
    authContext
    );    

  return (             
    <div className="card container shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">
            <form>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Amount To Cash Out"
                    name="amout"
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"                  
                    className="form-control"
                    placeholder="Enter Bank Name"
                    name="bankName"
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Bank Account Number"
                    name="bankNumber"
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Pin Number"
                    name="pinNumber"
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="submit"
                    value="Cash Out"
                    className="btn btn-lg btn-block btn-outline-success mt-4"
                />
                </div>
            </form>       
        </div>
    </div>
  )
}

export default Cashout
