import React from 'react'
import firebase from 'firebase'

import {Predict, rawToTime} from './PredictTime'
import {getEntry} from './loadData'

class ScheduleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          full_name: '',
          expected_time: 
            {
              hours: '',
              minutes: '',
              isPM: 'AM',
              seconds: '',
            },
          arrival_time: 
            {
              hours: '',
              minutes: '',
              isPM: 'AM',
              seconds: ''
            },
            scheduledTime: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getSeconds(event) {
      var total;
      const name = event.target.name;
      total += this.state.expected_time.hours * 1200;
      total += this.state.expected_time.minutes * 60;
      if (isAM == "pm") {
        total += 12*1200;
      }
      this.setState({
        [name.seconds]: total
      });
    }

    toSeconds(hours, minutes) {
        return hours * 60 * 60 + minutes * 60;
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;

        var copy;
        if (name == 'expected_time_hours') {
          copy = this.state.expected_time;
          copy.hours = target.value;
          this.setState({
            expected_time: copy
          });
        } else if (name == 'expected_time_minutes') {
          copy = this.state.expected_time;
          copy.minutes = target.value;
          this.setState({
            expected_time: copy
          });
        } else if (name == 'arrival_time_hours') {
          copy = this.state.arrival_time;
          copy.hours = target.value;
          this.setState({
            arrival_time: copy
          });
        } else if (name == 'arrival_time_minutes') {
          copy = this.state.arrival_time;
          copy.minutes = target.value;
          this.setState({
            arrival_time: copy
          });
        } else if (name == 'expected_time_isPM') {
          copy = this.state.expected_time;
          copy.isPM = target.value;
           console.log('expect')
          this.setState({
            expected_time: copy
          });
        } else if (name == 'arrival_time_isPM') {
          copy = this.state.arrival_time;
          copy.isPM = target.value;
          console.log('please')
          this.setState({
            arrival_time: copy
          });
        } else {
          this.setState({
              [name]: target.value
          });
      }
    }

    dispSchedule(timeToSchedule) {
      
    }

    handleSubmit(event) {
        //alert('User: ' + this.state.full_name + '\nExpected Time: ' + this.state.expected_time.hours + ' ' + this.state.expected_time.minutes+ ' ' + this.state.expected_time.isPM + '\nArrival Time: ' + this.state.arrival_time.hours + ' ' + this.state.arrival_time.minutes + ' ' + this.state.arrival_time.isPM);
        event.preventDefault();
        var user = firebase.auth().currentUser;
        var timeInSec = this.toSeconds(this.state.expected_time.hours,this.state.expected_time.minutes);
        getEntry(user.uid, this.state.full_name).once('value').then((snapshot) => {
          var arr = snapshot.val();
          var timeToSchedule = rawToTime(Predict(arr,timeInSec));
          console.log(timeToSchedule);
          this.setState({scheduledTime: timeToSchedule})
        });
    }


    render() {
        return (
        <div>
        <div className='sign-in'>
        <h1>Schedule</h1>
        <form onSubmit={this.handleSubmit} >
            <label><p>Full Name</p></label>
            <input className='input' type="text" name="full_name" value={this.state.full_name} onChange={this.handleChange} />

            <label><p>Expected Time</p></label>
            <div className='time-capsule'>
            <input className='input time in' maxLength="2" name="expected_time_hours" value={this.state.expected_time.hours} onChange={this.handleChange}/>
            <p className='in'>&nbsp;:&nbsp;</p>
            <input className='input time in' maxLength="2" name="expected_time_minutes" value={this.state.expected_time.minutes} onChange={this.handleChange}/>
            <div className='style-select'>
            <select value={this.state.expected_time.isPM} name="expected_time_isPM" onChange={this.handleChange}>
              <option className='in'>AM</option>
              <option className='in'>PM</option>
            </select>
            </div>
            </div>

            
        <input className='submit btn' type="submit" value="Submit" />
        </form>
        </div>
        <br />
        <h1>{this.state.scheduledTime}</h1>
        </div>
        );
    }
}

export default ScheduleForm;


/*
<label><p>Actual Arrival Time</p></label>
            <div className='time-capsule'>
            <input className='input time in' maxLength="2" name="arrival_time_hours" value={this.state.arrival_time.hours} onChange={this.handleChange}/>
            <p className='in'>&nbsp;:&nbsp;</p>
            <input className='input time in' maxLength="2" name="arrival_time_minutes" value={this.state.arrival_time.minutes} onChange={this.handleChange}/>
            <div className='style-select'>
            <select value={this.state.arrival_time.isPM} name="arrival_time_isPM" onChange={this.handleChange}>
              <option className='in'>AM</option>
              <option className='in'>PM</option>
            </select>
            </div>
            </div>*/
