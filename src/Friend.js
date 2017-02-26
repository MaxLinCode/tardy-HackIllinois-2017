import React from 'react'
//import firebase from 'firebase'

import { login } from './Auth'

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          full_name: '',
          email: '',
          password: '',
          phone: '',
        };

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
    writeUserData(userId, full_name) {
      firebase.database().ref('users/' + userId).set({
        name: full_name,
      });
    }

    render() {
        return (
        <div>
          <h1>Add a Friend</h1>
          <div className='sign-in'>
          <form onSubmit={this.handleSubmit} >
            <label><p>Full Name</p></label>
            <input className='input' type="text" name="full_name" value={this.state.full_name} onChange={this.handleChange} />

              <label><p>Email</p></label>
              <input className='input' type="text" name="email" value={this.state.email} onChange={this.handleChange} />
              <br />
              <label><p>Phone Number</p></label>
              <input className='input' maxLength='10' type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
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

export default FriendForm;
