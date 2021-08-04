import React from 'react';

class App extends React.Component {

  state = {
    count: 0
  };
  
  add = () => {
    this.setState({count : this.state.count + 1});
  };
  minus = () => {
    this.setState({count : this.state.count -1});
  };

  render() {
    return (
    <div>
      <h1> The number is : {this.state.count}</h1>
      <button onClick = {this.add}>add</button>
      <button onClick = {this.minus}>minus</button>
    </div>
    );
  }
}
//App.js > index.js
export default App;
