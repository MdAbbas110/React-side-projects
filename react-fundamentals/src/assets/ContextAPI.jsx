import { createContext } from 'react';

export const CountContext = createContext(0);

import { useContext, useState } from 'react';
import { CountContext } from './ContextAPI';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* Wrap anything that want to use the teleport provider first */}
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Button1 setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>Hi value {count}</div>;
}

function Button1({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>Decrease </button>
    </div>
  );
}
