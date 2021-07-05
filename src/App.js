import './App.css';
import React from 'react';
import Router from './Router';

class MyReactApplication extends React.Component {

  constructor(props) {
    super(props)
    this.state = { display: true };
  }

  login() {
    window.location = "/login"
  }

  render() {
    return (
      <div>
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

            Login
          </button>

          <br /><br />
          <hr />

        </div>
        <Router />
      </div>
    );
  }
}

export default MyReactApplication;
