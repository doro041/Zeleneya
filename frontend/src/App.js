import './App.css';
import { DisplayNameApollo } from './Apollo/displayNameApollo';
import { RegisterApollo } from './Apollo/registerApollo';

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
       <div>
        <RegisterApollo />
       </div>
      </header>
    </div>
  );
}

export default App;
