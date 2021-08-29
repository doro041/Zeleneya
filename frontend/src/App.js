import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
       <div>
      <header className="App-header">
        <Router>
          <Routes/>
        </Router>
      </header>
    </div>
   
  );
}

export default App;
