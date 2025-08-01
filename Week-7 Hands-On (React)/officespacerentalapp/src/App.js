import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    console.log("Hello! Counter is being updated...");
  };

  const handleIncrement = () => {
    sayHello();
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event Object:", event);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Event Examples</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>{' '}
      <button onClick={handleDecrement}>Decrement</button>

      <br /><br />
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <br /><br />
      <button onClick={handleClick}>Synthetic Event OnPress</button>

      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
