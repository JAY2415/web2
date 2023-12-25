import logo from './logo.svg'
import './App.css';

function Front() {
  return (
  <div>
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including movile</li>
    </ul>
    </header>
  </div>
);
}

export default Front;
