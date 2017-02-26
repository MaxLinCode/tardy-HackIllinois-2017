import React from 'react'
import firebase from 'firebase'


class NetworkForm extends React.Component {
    constructor(props) {
        super(props);
        //this.state =

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

    render() {
        return (
        <div>
        Friends
        </div>
        );
    }
}

export default NetworkForm;
