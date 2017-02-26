import React from 'react'
import firebase from 'firebase'

import { login } from './Auth'
import { getUserId } from './Auth'

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          full_name: '',
          email: '',
          password: '',
          phone: '',
          userId: this.getUserId,
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
    writeUserData(userId, full_name, email, phone) {
      firebase.database().ref('users/' + this.userId).set({
        name: full_name,
        email: email,
        number: phone,
      });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.writeUserData(this.state.userId, this.state.full_name, this.state.email, this.state.phone);
        //login(this.state.email, this.state.password);
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
          <input className='submit btn' type="submit" value="Submit" onChange={this.handleChange} />
          </form>
          </div>
        </div>
        );
    }
}

export default FriendForm;
