/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/Todos';

const e = React.createElement;

export function App() {
  return e('main', null, [
    e('h1', { key: 'header' }, 'Rails Todo Playground'),
    e('div', { key: 'container', className: 'container' }, e(Todos)),
  ]);
}

ReactDOM.render(
  e(App),
  document.getElementById('root'),
);
