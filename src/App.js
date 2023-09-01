import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
