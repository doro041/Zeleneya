import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
       <div className="App">
      <header className="App-header">
      <h2>My first Apollo app 🚀</h2>
        <Router>
          <Routes/>
        </Router>
      </header>
    </div>
   
  );
}

export default App;
