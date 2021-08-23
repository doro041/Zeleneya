import './App.css';
import {DisplayName} from './components/displayName'

const email = "dim.pramatarov@gmail.com";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
       <h2>My first Apollo app 🚀</h2>
       </div>
       <div>
         <DisplayName email={email.toString().trim()}/>
       </div>
      </header>
    </div>
  );
}

export default App;
