import React from 'react'
import firebase from 'firebase'
var database = firebase.database();

class ScheduleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          full_name: '',
          expected_time: 
            {
              hours: '',
              minutes: '',
              isPm: 'am',
              seconds: '',
            },
          arrival_time: 
            {
              hours: '',
              minutes: '',
              isPm: 'am',
              seconds: ''
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getSeconds(event) {
      var total;
      const name = event.target.name;
      total += this.state.expected_time.hours * 1200;
      total += this.state.expected_time.minutes * 60;
      if (isAm == "pm") {
        total += 12*1200;
      }
      this.setState({
        [name.seconds]: total
      });
    }
    makeFalse(event) {
      const name = event.target.name;
      this.setState({
        [name.isPm]: "pm"
      });

    }

    callGetSeconds() {
      this.makeFalse,
      this.getSeconds
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        alert('User: ' + this.state.username + '\nExpected Time: ' + this.state.expected_time + '\nArrival Time: ');
        event.preventDefault();
    }

    render() {
        return (
        <div>
        <div className='sign-in'>
        <h1>Schedule</h1>
        <form onSubmit={this.handleSubmit} >
            <label><p>Full Name</p></label>
            <input className='input' type="text" name="full_name" value={this.state.name} onChange={this.handleChange} />

            <label><p>Expected Time</p></label>
            <div className='time-capsule'>
            <input className='input time in' maxLength="2" value={this.state.expected_time.hours} onChange={this.handleChange}/>
            <p className='in'>&nbsp;:&nbsp;</p>
            <input className='input time in' maxLength="2" value={this.state.expected_time.minutes} onChange={this.handleChange}/>
            <div className='style-select'>
            <select>
              <option className='in' value={this.state.arrival_time.isPm} onClick={this.callGetSeconds}>AM</option>
              <option className='in' value={this.state.arrival_time.isPm} onClick={this.getSeconds}>PM</option>
            </select>
            </div>
            </div>

            <label><p>Actual Arrival Time</p></label>
            <div className='time-capsule'>
            <input className='input time in' maxLength="2" value={this.state.arrival_time.hours} onChange={this.handleChange}/>
            <p className='in'>&nbsp;:&nbsp;</p>
            <input className='input time in' maxLength="2" value={this.state.arrival_time.minutes} onChange={this.handleChange}/>
            <div className='style-select'>
            <select>
              <option className='in' value={this.state.arrival_time.isPm} onClick={this.callGetSeconds}>AM</option>
              <option className='in' value={this.state.arrival_time.isPm} onClick={this.getSeconds}>PM</option>
            </select>
            </div>
            </div>
        <input className='submit btn' type="submit" value="Submit" />
        </form>
        </div>
        </div>
        );
    }
}

export default ScheduleForm;
