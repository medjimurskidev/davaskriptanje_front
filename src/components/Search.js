import React, { Component } from 'react';

import './Search.css';


class Search extends Component {
  


  
  render() {
    
    return (
      <div className="container-fluid">
      <div className="row justify-content-center">
      <form class="form-inline">
    <input class="search" type="search" placeholder="Find..." aria-label="Search"></input>
    <button class="btn btn-outline-info btn-lg my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
      </form>   
      </div>
      </div>
          
     
      
    );
  }
}




export default Search;
