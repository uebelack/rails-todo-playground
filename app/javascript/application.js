import ReactDOM from 'react-dom';
import h from './h';
import Todos from './components/Todos';

ReactDOM.render(
  h`<main>
  <h1>Rails Todo Playground</h1>
  <div class="container">
    ${Todos({ test: 'Test' })}
  </div>
</main>`,
  document.getElementById('root'),
)