import React from 'react'
import firebase from 'firebase'

class NetworkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userId: '',};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {

    };

    handleChange(event) {
      const target = event.target;
      const name = target.name;
      this.setState({
        [name]: target.value
      });

    }
    render() {
        return (
          <div className='sign-in'>
          <h1>Friends</h1>
          firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/friends').once('value').then(function(snapshot) {
            var arr = snapshot.val();
            arr = Object.values(arr);
            arr.forEach(function() {
              <ul>

                <li><p>{this.arr.name}</p></li>;

              </ul>
            });
          });
        </div>
        );
    }
}

export default NetworkForm;
