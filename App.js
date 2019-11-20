import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
import './App.css';

//Babel js: convert javscript to old version of javascript 

class App extends Component {
  render(){
    return (
      // JSX
      <div className="App">
        {/* <LearningComponents></LearningComponents> */}
        {/* // props.by */}
        <Counter/>
        
      </div>
    );
  }
}

class LearningComponents extends Component {
  render(){
    return (
      // JSX
      <div className="LearningComponents">
        Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}



export default App;
