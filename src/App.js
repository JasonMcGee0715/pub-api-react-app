import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Beer from './component/Beer/Beer'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    }
  }

componentDidMount() {
  console.log('Something happened');
  fetch('https://api.punkapi.com/v2/beers')
  .then(response => response.json())
  .then(data => {
    this.setState({
      beers: data
    })
  });
}

  render() {
    return (
      <div className="App">
        <h1 className='title'>Pub Api</h1>
        <ul className='beerList'>
          {this.state.beers.map(beer => (
          <Beer beer={beer}/>
          ))}
        </ul>
      </div>
    );
  }
}


export default App;
