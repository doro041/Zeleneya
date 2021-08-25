import './App.css';
import {DisplayNameApollo} from './apoloClient/displayNameApolo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
       <h2>My first Apollo app 🚀</h2>
       </div>
       <div>
         <DisplayNameApollo />
       </div>
      </header>
    </div>
  );
}

export default App;
