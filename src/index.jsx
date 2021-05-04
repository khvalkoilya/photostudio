import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import 'normalize.css';
import './style.scss';
import test from './utils/api';

// console.log(test());
// logAllPhotostudios();

async function getTest() {
  const data = await test();
  console.log(data);
}

getTest();

ReactDOM.render(<App initialCount={10} />, document.getElementById('root'));
