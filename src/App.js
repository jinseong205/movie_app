import React from 'react';
import PropTypes from 'prop-types';

function Food({key, name, picture, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt ={key}/>
    </div>
  );
}

const foodILike = [
  {
    id : 1,
    name : 'kimchi',
    image: '123',
    rating : 5
  },
  {
    id: 2,
    name : 'Samgyeopsal',
    image: '234',
    rating : 10
  },
  {
    id :3,
    name : 'Bibimbap',
    image: '3456',
    rating : 8
  },
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => 
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
        )}
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,  
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};

//App.js > index.js
export default App;
