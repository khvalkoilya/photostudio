import React, { useState, useContext } from 'react';
import Context from '../context/Context';

const SignIn = () => {
  const data = [
    {
      login: 'admin@admin.com',
      password: 'admin',
    },
    {
      login: 'admin1@admin.com',
      password: 'admin',
    },
    {
      login: 'admin2@admin.com',
      password: 'admin',
    },
  ];

  const { setPage } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSignIn() {
    const credentials = data.find((cred) => cred.login === email);
    if (credentials) {
      if (credentials.password === password) {
        setError('')
        //ooooooooooooooooo
      } else {
        setError('Введен неправильный пароль')
      }
    } else {
      setError('Введен неправильный email')
    }
  }

  return (
    <section className="authorization">
      <form>
        <h1>Вход</h1>
        <p className="authorization__error">{error}</p>
        <input value={email} onChange={(e) => handleEmail(e)} name="email" type="text" placeholder="Введите email..." />
        <input value={password} onChange={(e) => handlePassword(e)} name="password" type="text" placeholder="Введите пароль..." />
        <button className="authorization__signIn" onClick={() => handleSignIn()} type="button">Войти</button>
        <button onClick={() => setPage('registration')} className="authorization__link-registration" type="button">Зарегестироваться</button>
      </form>
    </section>
  );
}

export default SignIn;
