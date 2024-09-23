import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/userContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en <LoginPage />', () => {
  it('debe de mostrar el componente sin el usuario', () => {
    const container = render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');
    expect(container).toMatchSnapshot();
  });

  it('debe de llamar al setUser cuando se hace click en el botón', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonSetUser = screen.getByRole('button');

    fireEvent.click(buttonSetUser);

    expect(setUserMock).toHaveBeenCalledWith({
      email: 'pepe@gmail.com',
      id: 123,
      name: 'Juan',
    });
  });
});
