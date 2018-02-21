import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Card from "./components/Card"
import Hero from "./components/Hero"



class App extends Component {
  state ={
    articles: []
  }


  render(){
    return(
      <div>
      <Header/>
      <Hero/>
      </div>

    )
  }

}

export default App;
