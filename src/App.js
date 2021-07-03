import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Router from './Router';

class MyReactApplication extends React.Component {

  constructor(props) {
    super(props)
  }

  login() {
    alert('login')

    window.location.href = "/login"
  }

  render() {
    return (
      <div>

        <Router />

        Hey React!
        <p>
          This is my first effective react app
        </p>

        <button onClick={() => {
          alert("hey dude, first alert")
        }}>Show Alert</button> <br />

        <button onClick={
          this.login
        }>

          Login
        </button>


      </div>
    );
  }
}

export default MyReactApplication;
