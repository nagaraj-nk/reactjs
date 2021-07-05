import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "Enter Username",
            password: "Password",
            userNameVal: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target.value);
        this.setState({
            userNameVal: event.target.value
        });
    }

    login() {
        localStorage.username = this.state.userNameVal;
        window.location = "/home"
    }

    render() {
        return (
            <div>
                Login Page
                <p>Username</p>
                <input placeholder={this.state.username} value={this.state.userNameVal}
                    onChange={this.handleInputChange}
                ></input><br />
                <p>Password</p>
                <input placeholder={this.state.password} typeof="Password"></input><br />
                <br />
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default Login;
