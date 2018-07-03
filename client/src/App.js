import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  getGetRequest(){
    axios.get("/api/test").then(res => {
      console.log("get test");
    });
  }
  getPostRequest(){
    axios.post("/api/test", {test: true}).then(res =>{
      console.log("post test");
    });
  }

  render() {
    return (
      <div>
      <form>
        <input id="title" />
        <textarea id="post"></textarea>
          </form>
      </div>
    );
  }
}

export default App;
