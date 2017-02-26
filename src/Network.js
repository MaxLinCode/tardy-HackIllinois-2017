import React from 'react'
import firebase from 'firebase'


class NetworkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          full_name: '',
          expected_time: [
            {
              hours: '',
              minutes: '',
              isPm: 'am',
              seconds: '',
            }],
          arrival_time: [
            {
              hours: '',
              minutes: '',
              isPm: 'am',
              seconds: ''
            }],
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
        if (name == 'expected_time') {
          this.setState
        }
        else if (name == 'arrival_time') {

        } else {
          this.setState({
              [name]: target.value
          });
        }
    }

    handleSubmit(event) {
        alert('User: ' + this.state.full_name + '\nExpected Time: ' + this.state.expected_time.hours + '\nArrival Time: ');
        event.preventDefault();
    }


    render() {
        return (
        <div>
        Friends
        </div>
        );
    }
}

export default NetworkForm;
