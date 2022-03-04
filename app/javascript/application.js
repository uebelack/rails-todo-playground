/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactDOM from 'react-dom';

import Todos from './components/Todos';

export function App() {
  return (<main>
      <h1>Rails Todo Playground 2</h1>
      <div className="container">
        <Todos />
      </div>
    </main>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
