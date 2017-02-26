import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>hey hey, this is our main page</h1>
                <ul role="nav">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
