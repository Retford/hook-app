import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el hook useCounter', () => {
  test('debe de retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Debe de retornar 100', () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter());

    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment();
    });

    expect(result.current.counter).toBe(12);
  });

  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter());

    const { counter, decrement } = result.current;

    act(() => {
      decrement();
      decrement();
    });

    expect(result.current.counter).toBe(8);
  });

  test('debe de resetear el valor por defecto', () => {
    const { result } = renderHook(() => useCounter());

    const { counter, increment, reset, decrement } = result.current;

    act(() => {
      increment();
      decrement(100);
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
