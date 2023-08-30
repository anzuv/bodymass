
import { useState } from 'react';
import './App.css';

function App() {
  const [hei, setHei] = useState(0)
  const [wei, setWei] = useState(0)
  const [tot, setTot] = useState(0)

function calculate (e){
  e.preventDefault()
  const result = wei / (hei * hei)
  setTot(result)
  }
  return (
    <div id="container">
    <form onSubmit={calculate}>
      <h1>Calculate body mass index</h1>
      <div>
      <label>Height</label>
      <input value={hei} onChange={e => setHei(e.target.value)}/>
      </div>
      <div>
        <label>Weight</label>
        <input value={wei} onChange={e => setWei(e.target.value)}/>
      </div>
      <div>
      <output>{tot}</output>
      </div>
      <button>Calculate</button>
    </form>
  </div>
  );
}

export default App;
