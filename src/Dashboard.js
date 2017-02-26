import React from 'react'
import {browserHistory} from 'react-router'
import { login } from './Auth'
//var database = firebase.database();

class DashboardForm extends React.Component {
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
    handleSchedule() {
      browserHistory.push('/schedule');
    }
    handleFriend() {
      browserHistory.push('/friend');
    }
    handleNetwork() {
      browserHistory.push('/network');
    }
    handleSubmit(event) {
        event.preventDefault();
        login(this.state.email, this.state.password);
    }

    render() {
        return (
          <div className='sign-in'>
            <br/>
            <div className='submit btn' onClick={this.handleFriend}><p>Add a Friend</p>
            </div>
            <br/>
            <div className='submit btn' onClick={this.handleSchedule}><p>Schedule a Meetup</p>
            </div>
            <br/>
            <div className='submit btn' onClick={this.handleNetwork}><p>See Network</p>
            </div>
            <br/>
          </div>
        );
    }
}

export default DashboardForm;
