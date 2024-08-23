import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('TodoItem', () => {
  const todo = [];
  const onDeleteTodo = jest.fn;
  const onToggleTodo = jest.fn;
  it('xd', async () => {
    const { container } = render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const deleteButton = await screen.findByRole('button');

    await act(async () => {
      fireEvent.click(deleteButton);
    });
    expect(container).toMatchSnapshot();

    screen.debug();
  });
});
