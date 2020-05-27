import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'
import Toggle from './Toggle.js'
import LoginControl from './LoginControl.js'
import NameForm from './NameForm.js'
import Display from './Temperature.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><Clock />
        <Toggle/><br/>
        <ActionLink />
        <LoginControl/>
        <NameForm/>
        <Display/>
        <a
          class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*
        <List list={numbers}/>
        <hr/>
        <List list={words}/>
        */}
        </p>
      </header>
    </div>
  );
}

function ActionLink() {
  function handleClick(e){
    e.preventDefault();
    alert("link clicked")
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  )
}

const numbers = [1,2,3,4,5];
const words = ["Hello", "world", "today"]

function List(props) {
  const list = props.list;
  const listItems = list.map(
    (listItem)=>
    <li>
      {listItem}
    </li>)
  return <ul>{listItems}</ul>
}

export default App;
