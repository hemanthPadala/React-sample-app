import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './index.scss';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    userName : "superSwathi"
  }
}
  render() {
    return (
      <div className="App">
        <h1>Hello Swathi!!</h1>
        <UserInput/>
        <UserOutput username={this.state.userName}/>
        <UserOutput username="Swathi"/>
      </div>
    );
  }
}

export default App;
