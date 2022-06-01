/* eslint-disable import/prefer-default-export */
import React from 'react';
import Todos from './Todos';

const e = React.createElement;

function App() {
  return e('main', null, [
    e('h1', { key: 'header' }, 'Rails Todo Playground'),
    e('div', { key: 'container', className: 'container' }, e(Todos)),
  ]);
}

export default App;
