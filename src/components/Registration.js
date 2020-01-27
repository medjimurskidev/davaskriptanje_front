import React, { Component } from 'react';




class Registration extends Component {
  


  
  render() {
    
    return (
        <div className="container bg-light mt-5">
        <h2>Registration</h2>
        <hr className="my-4"></hr>
    <form>
    <div className="row">
    <div className="col-md-6">
    <div className="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" className="form-control" name="firstName" placeholder="Enter your first name"></input>
    </div>
    </div>
    <div className="col-md-6">
    <div className="form-group">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="text" className="form-control" name="firstName" placeholder="Enter your first name"></input>
    </div>
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
    <div className="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" className="form-control" name="username" placeholder="Enter your username"></input>
    </div>
    </div>
    <div className="col-md-6">
    <div className="form-group">
    <label for="exampleInputEmail1">E-mail </label>
    <input type="email" className="form-control" name="firstName" placeholder="Enter your e-mail address"></input>
    </div>
    </div>
    </div><div className="row">
    <div className="col-md-6">
    <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name="password" placeholder="Password"></input>
    </div>
    </div>
    <div className="col-md-6">
    <div className="form-group">
    <label for="exampleInputPassword1">Repeat Password</label>
    <input type="password" className="form-control" name="password" placeholder="Confirm Password"></input>
    </div>
    </div>
    </div>
  <hr className="my-4"></hr>
  <button type="submit" className="btn btn-outline-info mt-3">Sign Up</button>
</form>
</div>
      
    );
  }
}

export default Registration;
