import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import 'normalize.css';
import './style.scss';
import { setAccount } from './utils/api';

// console.log(test());
// logAllPhotostudios();

async function getTest() {
  await setAccount({name: 'illia'});
  // console.log(data);
}

getTest();

ReactDOM.render(<App />, document.getElementById('root'));
