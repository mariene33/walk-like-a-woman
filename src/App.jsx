import { useState } from 'react'
import Router from './configuration/Router';


function App() {
  const [count, setCount] = useState(0);

  return (
   
    <Router/>

  );
}

export default App;