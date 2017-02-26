import React from 'react'

import { login } from './Auth'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        login(this.state.email, this.state.password);
    }

    render() {
        return (
        <div>
          <br/>
          <div className='sign-in'>
          <form onSubmit={this.handleSubmit} >
              <label><p>Email</p></label>
              <input className='input' type="text" name="email" value={this.state.email} onChange={this.handleChange} />
              <br />
              <label><p>Password</p></label>
              <input className='input' type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <input className='submit btn' type="submit" value="Submit" />
          </form>
          </div>
        </div>
        );
    }
}

export default LoginForm;
