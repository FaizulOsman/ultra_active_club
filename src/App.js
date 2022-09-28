import logo from './logo.svg';
import './App.css';
import { faCoffee, faDumbbell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <h1>Hey! This is 8th Assignment</h1>
      <button className="btn btn-primary">Button</button>
      <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
    </div>
  );
}

export default App;
