import React from 'react';
import Home from './routes/Home'
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About'
import Nav from  './component/Navigation';
import Detail from './routes/Detail';

function App(){
    return(
      <HashRouter>
        <Nav/>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail}/>
      </HashRouter>
    )
}


//App.js > index.js
export default App;
