import { Component } from 'react';
import './App.css';

class App extends Component{
  state = { name: {firstName: "venkat",lastName: 'mudili'} };
  render(){
    const {name} = this.state;
    const firstName = name.firstName;
    const lastName = name.lastName;
    return(
      <>
        <p>This is my name: {firstName} {lastName}</p>
        <button onClick={()=>{
          this.setState({name: {firstName: "yashwanth",lastName: 'mudili'}})
        }}>Change Name</button>
      </>
    )
  }
}

export default App;
