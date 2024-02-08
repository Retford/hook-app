import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStyuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...');
  }
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStyuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
        <hr />
        <h4>{memorizedValue}</h4>
        <button className='btn btn-primary' onClick={() => increment()}>
          +1
        </button>
        <button
          className='btn btn-outline-primary'
          onClick={() => setShow(!show)}
        >
          Show/Hied {JSON.stringify(show)}
        </button>
      </h1>
    </>
  );
};
