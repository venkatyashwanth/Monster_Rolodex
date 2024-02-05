import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters: []
    }
    console.log("1");
  }
  

  componentDidMount() {
    console.log('3')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state);
        }
      ))
  }

  render() {
    const monstersList = this.state.monsters;
    console.log("2");
    return (
      <div>
        {monstersList.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    )
  }
}

export default App;
