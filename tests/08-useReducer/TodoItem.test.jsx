import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('TodoItem', () => {
  const todo = {
    id: 1,
    description: 'Piedra de sangre',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('Debe de mostrar el Todo pendiente de completar', async () => {
    const { container } = render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = await screen.getByRole('listitem');
    const spanElement = await screen.getByLabelText('span');

    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  it('Debe de mostrar el Todo completado', async () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = await screen.getByRole('listitem');
    const spanElement = await screen.getByLabelText('span');

    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    expect(spanElement.className).not.toBe('align-self-center');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  it('El span debe de llamar el ToggleTodo cuando se hace click', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  it('el botón debe de llamar el deteleTodo', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByRole('button', { name: 'Borrar' });

    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
