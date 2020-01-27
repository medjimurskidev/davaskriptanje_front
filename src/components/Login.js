import React, { Component } from 'react';




class Login extends Component {
  
  render() {
    
    return (
        <div className="container m-5 p-5">
        <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center" id="exampleModalLongTitle">Sign In</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form>
              <div className="form-group mt-3">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" name="password" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mt-3">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" name="password" placeholder="Password"></input>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" name="rememberMe"></input>
              <label className="form-check-label" for="exampleCheck1">Remember Me</label>
            </div>
            <hr className="my-4"></hr>
            <button type="submit" className="btn btn-info mt-3">Sign In</button>
          </form>
          </div>
        </div>
      </div>
    </div> 
    </div>
      
    );
  }
}




export default Login;
