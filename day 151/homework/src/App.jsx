import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
      setError(null);
    } catch {
      setError('Invalid Expression');
    }
  };

  const clearScreen = () => {
    setInput('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="calculator">
      <div className="screen">
        <div>{input}</div>
        <div>{result !== null && !error ? `= ${result}` : error}</div>
      </div>
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'].map((btn) => (
          <button key={btn} onClick={() => handleInput(btn.toString())}>
            {btn}
          </button>
        ))}
        <button onClick={calculateResult}>=</button>
        <button onClick={clearScreen}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
