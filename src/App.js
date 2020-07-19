import React from 'react';


//data from server
const foodLike = [
  { name: 'kimchi', image: 'image' },
  { name: 'samgyeopsal', image: 'image' },
  { name: 'bibimbap', image: 'image' },
  { name: 'doncasu', image: 'image' },
  { name: 'Kimbap', image: 'image' }

];

function Food({ name,picture }) {
  return (
    <div>
    <h2>I like {name}</h2>
    <h2>{picture}**</h2>   
    

    </div>
  )
}


function App() {
  return (
    <div className="App">
      {foodLike.map(dish =>(
        <Food name = {dish.name} picture = {dish.image}/>
      ))}
    </div>
  );
}


export default App;
