import React from 'react';


//data from server
const foodLike = [
  { id : 1, name : 'kimchi', image : 'image' },
  { id : 2, name : 'samgyeopsal', image : 'image' },
  { id : 3, name : 'bibimbap', image : 'image' },
  { id : 4, name : 'doncasu', image : 'image' },
  { id : 5, name : 'Kimbap', image : 'image' }

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
        <Food key = {dish.key} name = {dish.name} picture = {dish.image}/>
      ))}
    </div>
  );
}


export default App;
