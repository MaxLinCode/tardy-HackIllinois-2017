import React from 'react'
import firebase from 'firebase'

class NetworkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userId: '', arr: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/friends').once('value').then((snapshot) => {
          var arr = snapshot.val();
          arr = Object.values(arr);
          var out = []
          for(var i = 0; i < arr.length; i++) {
            out.push(arr[1].name)
          }
          this.state.arr = out
          console.log(this.state.arr)
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
           
           </ul>
        </div>
        );
    }
}

export default NetworkForm;
/*
{this.state.arr.map((friend) => {
            return <li>{friend}</li>
           })}
*/