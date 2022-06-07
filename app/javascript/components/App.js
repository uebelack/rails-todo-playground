import React from 'react';
import htm from 'htm';
import Todos from './Todos';

const html = htm.bind(React.createElement);

function App() {
  return html`
    <main>
      <h1>Rails Todo Playground</h1>
      <div className="container">
        <${Todos} />
      </div>
    </main>`;
}

export default App;
