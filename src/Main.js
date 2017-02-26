import React from 'react';
import { Link } from 'react-router';
import { logout } from './Auth'
import { firebaseAuth } from './config/fireConstants'

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <img src='tardy.svg' className='logo' alt='tardy' />
                </div>
                {this.props.children}
            </div>
        );
    }
}


export default Main;
