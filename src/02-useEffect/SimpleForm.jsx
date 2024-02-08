import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'garujb',
    email: 'garujb@gmail.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('formState change');
  }, [formState]);

  useEffect(() => {
    // console.log('email change');
  }, [email]);

  return (
    <>
      <div>Simple Form</div>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className='form-control mt-2'
        placeholder='retford@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      {username === 'garujb' && <Message />}
    </>
  );
};
