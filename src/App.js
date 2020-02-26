import React, { useState } from 'react';
import './App.css';

function Component({ title, onButtonClick }) {
  return <div onClick={onButtonClick} style={{ marginTop: '12px' }}>
    <div>{title}</div>
    <div>now={Date.now()}</div>
  </div>
}

const MemoizedComponent = React.memo(Component)

function App() {
  const [counter, setCounter] = useState(0)

  const memoizedCallback = React.useCallback(() => {
    console.log('Component clicked')
  }, [])

  return (
    <div className="App">
      <div>
        <span>Increase counter </span>
        <button onClick={() => setCounter(counter + 1)}>Click</button>
      </div>
      <h1>Counter {counter}</h1>

      <div>
        <Component title='Regular component, inline callback' onButtonClick={() => console.log('Component clicked')}/>
        <MemoizedComponent title='Memoized component, inline callback'  onButtonClick={() => console.log('Component clicked')} />

        <Component title='Regular component, memoized callback' onButtonClick={memoizedCallback} />
        <MemoizedComponent title='Memoized component, memoized callback'  onButtonClick={memoizedCallback} />
      </div>
    </div>
  );
}

export default App;
