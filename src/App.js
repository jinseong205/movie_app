import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>hello!</h1>

      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />


    </div>
  );
}

function Food(props) {
  return <h1>I like {props.fav}</h1>
}

export default App;
