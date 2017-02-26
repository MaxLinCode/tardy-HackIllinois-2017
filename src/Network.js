import React from 'react'
import firebase from 'firebase'

class NetworkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userId: '', friendList: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/friends').once('value').then((snapshot) => {
          var arr = snapshot.val();
          arr = Object.values(arr);
          this.state.friendList = arr.map((item)=> {
            <li><p>{item}</p></li>
          });
          arr.forEach(function() {
            <ul>
            </ul>
          });
        });
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
          <ul>
            {this.state.friendList}
          </ul>
        </div>
        );
    }
}

export default NetworkForm;
