import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    monsters: [
      {
        id:1,
        name: 'Linda'
      },
      {
        id:2,
        name: 'Frank'
      },
      {
        id:3,
        name: 'Jacky'
      },
      {
        id:4,
        name: 'Venky'
      },
    ]
  };

  render() {
    const monstersList = this.state.monsters;
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
