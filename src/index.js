import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/button';
import Hello from './components/hello'
import InName from './components/inName';

ReactDOM.render(
  <div className='flex flex-auto justify-center items-center bg-black h-screen'>
    <Hello></Hello>
    <InName></InName>
    <Button></Button>
  </div>,
  document.getElementById('root')
);

