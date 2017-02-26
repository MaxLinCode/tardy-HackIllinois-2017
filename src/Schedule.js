import React from 'react'
import firebase from 'firebase'


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
          this.setState({
            expected_time: copy
          });
        } else if (name == 'arrival_time_isPM') {
          copy = this.state.arrival_time;
          copy.isPM = target.value;
          console.log(target.value)
          this.setState({
            arrival_time: copy
          });
        }
        else {
          this.setState({
              [name]: target.value
          });
      }
    }

    handleSubmit(event) {
        alert('User: ' + this.state.full_name + '\nExpected Time: ' + this.state.expected_time.hours + ' ' + this.state.expected_time.minutes+ ' ' + this.state.expected_time.isPm + '\nArrival Time: ' + this.state.arrival_time.hours + ' ' + this.state.arrival_time.minutes + ' ' + this.state.expected_time.isPm);
        event.preventDefault();
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
            <select>
              <option className='in' value={this.state.expected_time.isPm} name="expected_time_isPm" onClick={this.callGetSeconds} onChange={this.handleChange}>AM</option>
              <option className='in' value={this.state.expected_time.isPm} name="expected_time_isPm" onClick={this.getSeconds} onChange={this.handleChange}>PM</option>
            </select>
            </div>
            </div>

            <label><p>Actual Arrival Time</p></label>
            <div className='time-capsule'>
            <input className='input time in' maxLength="2" name="arrival_time_hours" value={this.state.arrival_time.hours} onChange={this.handleChange}/>
            <p className='in'>&nbsp;:&nbsp;</p>
            <input className='input time in' maxLength="2" name="arrival_time_minutes" value={this.state.arrival_time.minutes} onChange={this.handleChange}/>
            <div className='style-select'>
            <select>
              <option className='in' value={this.state.arrival_time_isPm} name="arrival_time_isPm" onClick={this.callGetSeconds} onChange={this.handleChange}>AM</option>
              <option className='in' value={this.state.arrival_time_isPm} name="arrival_time_isPm" onClick={this.getSeconds} onChange={this.handleChange}>PM</option>
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
