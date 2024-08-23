import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('<MultipleCustomHooks/>', () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 2,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de llamar la función de incrementar', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Retford', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nexButton = screen.getByRole('button', { name: 'Next Quote' });

    fireEvent.click(nexButton);

    expect(mockIncrement).toHaveBeenCalled();
  });

  test('no debe de aparecer la palabra inicial', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nexButton = screen.getByRole('button', { name: 'Next Quote' });

    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(nexButton.disabled).toBeTruthy();
  });
});
