import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
        <hr />
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
