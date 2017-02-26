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
<<<<<<< HEAD
          this.state.friendList = arr.map((item)=> {
            <li><p>{item}</p></li>
          });
          arr.forEach(function() {
            <ul>
            </ul>
          });
=======
          var out = []
          for(var i = 0; i < arr.length; i++) {
            out.push(arr[1].name)
          }
          this.state.arr = out
          console.log(this.state.arr)
>>>>>>> 067ab3796d587c5fe1dbac815110c976aac6e64d
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

<<<<<<< HEAD


=======
>>>>>>> 067ab3796d587c5fe1dbac815110c976aac6e64d
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