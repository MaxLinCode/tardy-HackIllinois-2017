import React from 'react'

export default class Home extends React.Component {
    
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