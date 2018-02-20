import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Card from "./components/Card"



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
