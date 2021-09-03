
import './App.css';

import Developer from './components/developer/developer';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Developer   name = 'Willian' age = '21' country = 'Brasil'/>
        <Developer   name = 'Tiago' age = '24' country = 'Egito'/>
        <Developer   name = 'Giocana' age = '35' country = 'Peru'/>
        <Developer   name = 'Renato Aragão' age = '87' country = 'EUA'/>
      </div>
    </div>
  );
}

export default App;
