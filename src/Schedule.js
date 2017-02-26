import React from 'react'

class ScheduleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

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
        alert('User: ' + this.state.username + '\nPass: ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
        <div>
        <div className='sign-in'>
        <h1>Schedule</h1>
        <form onSubmit={this.handleSubmit} >
            <label>Username</label>
            <input className='input' type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            <br />
            <label>Password</label>
            <input className='input' type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        <input className='submit btn' type="submit" value="Submit" />
        </form>
        </div>
        </div>
        );
    }
}

export default ScheduleForm;
