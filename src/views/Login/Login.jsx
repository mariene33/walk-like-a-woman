import { useState } from 'react'
import './Login.css'
import CardInit from '../../components/atoms/CardInit/CardInit';

function Login() { 
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los valores de los inputs, por ejemplo, enviarlos a un servidor o mostrarlos en la consola.
    console.log('Valor de Input 1:', input1);
    console.log('Valor de Input 2:', input2);
  };
  
  return (
    
  <div className="background">
    <div className="card">
      <h1>Empieza la aventura</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="placehoder">
          <input 
            type="text"
            id="input1"
            placeholder="Email"
            value={input1}
            onChange={handleInputChange1}
          />
        </div>
        <div className="placehoder">
          <input 
            type="text"
            id="input2"
            placeholder="Contraseña"
            value={input2}
            onChange={handleInputChange2}
          />
        </div>
        <button className="send-button" type="submit">Enviar</button>
      </form>
<h2 className='registro'> ¿Aún no estas registrado? </h2>

    </div>
  </div>
 
  
    );
  }
  <CardInit/>
  export default Login;