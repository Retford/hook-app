import { useCounter, useFetch } from '../hooks/';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { increment, decrement, counter } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className='btn btn-primary'
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next Quote
      </button>
      <button
        className='btn btn-danger'
        onClick={() => decrement()}
        disabled={counter === 1}
      >
        Prev Quote
      </button>
    </>
  );
};
