import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";



class App extends Component {
  state ={
    articles: []
  }


  render(){
    return(
      <Header/>
    )
  }

}

export default App;
