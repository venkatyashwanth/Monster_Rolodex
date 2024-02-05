import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }


  componentDidMount() {
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
    return (
      <div>
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event)=>{console.log(event.target.value)}}/>
        {monstersList.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    )
  }
}

export default App;
