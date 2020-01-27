import React, { Component } from 'react';

import Search from './Search';


class Homepage extends Component {
  


  
  render() {
    
    return (
      <div className="container p-5 mt-5">
        <div className="row d-flex justify-content-center"><Search /></div>
      </div>
    );
  }
}



export default Homepage;
