
import { React } from 'react';


class Login extends React.Component {

    render() {
        return (
            <div>
                Login Page
                <p>Username</p>
                <input placeholder="Username"></input><br />
                <p>Password</p>
                <input placeholder="Username" typeof="Password"></input><br />

            </div>
        );
    }
}