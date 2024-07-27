import { useState } from 'react'
import './App.css'

function App() {
  const buttonStyle = {
    marginLeft: '10px'
  };
  const [counter, setCounter] = useState(0)
  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <div>
        <h1>The Counter</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <button style={buttonStyle} onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
