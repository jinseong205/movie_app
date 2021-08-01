import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h1>I like {name}</h1>
      <img src = {picture}/>
    </div>
  );
}

const foodILike = [
  {
    name : 'kimchi',
    image: '123',
  },
  {
    name : 'Samgyeopsal',
    image: '234',
  },
  {
    name : 'Bibimbap',
    image: '3456',
  },
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => 
        <Food name={dish.name} picture={dish.image}/>
        )}
    </div>
  );
}


//App.js > index.js
export default App;
