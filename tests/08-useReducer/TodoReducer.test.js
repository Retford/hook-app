import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];

  it('should return the state initial', () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  it('should add a TODO', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  it('should remove a TODO', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false,
      },
    };
    const action2 = {
      type: '[TODO] Delete Todo',
      payload: 1,
    };

    const action3 = {
      type: '[TODO] Delete Todo',
      payload: 2,
    };

    const newState = todoReducer(initialState, action);
    const newState2 = todoReducer(newState, action2);
    const newState3 = todoReducer(newState2, action3);
    expect(newState.length).toBe(2);
    expect(newState2.length).toBe(1);
    expect(newState3.length).toBe(0);
    expect(newState3).toEqual([]);
  });

  it('should do the toggle of all', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    const newState2 = todoReducer(newState, action);
    expect(newState[0].done).toBe(true);
    expect(newState).toEqual([
      {
        id: 1,
        description: 'Demo Todo',
        done: true,
      },
    ]);
    expect(newState2).toEqual([
      {
        id: 1,
        description: 'Demo Todo',
        done: false,
      },
    ]);
  });
});
