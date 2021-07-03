import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class MyReactApplication extends React.Component {

  constructor(props) {
    super(props)
  }

  login() {
    window.location = "/login"
  }

  render() {
    return (
      <div>
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
          Login Page
        </button>
      </div>
    );
  }
}

export default MyReactApplication;
