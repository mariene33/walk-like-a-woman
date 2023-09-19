import { useState } from 'react'
import Router from './configuration/Router';


function App() {
  const [count, setCount] = useState(0);

  return (
   
    <Router/>

  

    // <div>
      
    //     {/* <CardInit/>
    //     <Button variant="contained">Hello world</Button>
    //     <Footer/> */}
    // </div>
  );
}

export default App;