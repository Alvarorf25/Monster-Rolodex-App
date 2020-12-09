import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

//THIS WAY IS A CLASS COMPONENT
class App extends React.Component {                         // Component also gives us acces to the "setState()"/(useState in React latest version) method to allows us update "this.state" change every shingle html object. setState({takes an object with allof the properties that you want to change at your state as well as the new values that they have})
  constructor() {
    super();                                                // where super does is call the constructor method on the component classe giving us access to "this.state"
  
    this.state = {
      monsters: [],
      searchField: ''
    };    
  }

  componentDidMount() {                                     // it makes react calls whatever bock of code is inside of it. So the cyle method "componentDidMount()" does is mount or put our component on the page and render onto the DOM the code that is inside of componentDidMount()
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())                      // converting the response into json() for javascript can understand the data is coming from the url
    .then(users => this.setState({ monsters: users }));     // taking the info we got and set our monsters array with this info that is an array too.
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {                                                // this (monsters= {this.state.monsters}) is the argument "props"
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.charAt(0).toLowerCase().includes(searchField.toLowerCase())
    );
    return (      
      <div className = 'App'>
        <h1>Monsters Rolodex</h1> 
        <SearchBox
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;





/*
if you want to know if setState() is updating the state:

NOTE:
setState(): is an asychronous function. That means that setState is not going to act 
immediately when we would spect it to. Because of that React gives us a solution for 
that using a second argument that we pass into setState, it is a callback fuction which
runs after setState finish:

{this.setState({ searchField: e.target.value }, () => console.log(this.state));}
*/