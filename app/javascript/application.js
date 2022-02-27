/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactDOM from 'react-dom';
import htm from 'htm';

import Todos from './components/Todos';

const html = htm.bind(React.createElement);

export function App() {
  return html`
    <main>
      <h1>Rails Todo Playground</h1>
      <div className="container">
        <${Todos} />
      </div>
    </main>`;
}

ReactDOM.render(
  html`<${App}/>`,
  document.getElementById('root'),
);
