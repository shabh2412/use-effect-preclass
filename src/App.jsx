import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import InputGroup from './components/InputGroup';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <div className="row border">
        <Todo />
      </div>
    </div>
  );
}

export default App;
