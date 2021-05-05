import React, { useState, useContext, useEffect, useRef } from 'react';
import Context from '../context/Context';
import getAccounts from '../../utils/api';
import ACCOUNTS_TEST from '../../variables/testAccounts';

const SignIn = () => {
  const { setPage, setIsAuth, setRole } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [accounts, setAccounts] = useState(null);

  const inputEl = useRef(null);
  useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await getAccounts();
        setAccounts(response);
      } catch (err) {
        setAccounts(ACCOUNTS_TEST);
        console.error(err.message);
      }
    }
    fetchAccounts();
  }, []);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSignIn(e) {
    e.preventDefault();
    const credentials = accounts.find((cred) => cred.login === email);
    if (credentials) {
      if (credentials.password === password) {
        setError('');
        setIsAuth(true);
        setRole(credentials.type);
        setPage('home');
      } else {
        setEmail('');
        setPassword('');
        inputEl.current.focus();
        setError('Введен неправильный пароль');
      }
    } else {
      setEmail('');
      setPassword('');
      inputEl.current.focus();
      setError('Введен неправильный email');
    }
  }

  return (
    <section className="authorization">
      <div className="container">
        <form>
          <h1 className="authorization__title">Welcome</h1>
          <h2 className="authorization__name-company">KI_Studio</h2>
          <p className="authorization__description">Введите свою почту и пароль, чтобы войти</p>
          <input
            value={email}
            onChange={(e) => handleEmail(e)}
            name="email"
            type="text"
            placeholder="Email"
            ref={inputEl}
            className="authorization__email"
          />
          <input
            value={password}
            onChange={(e) => handlePassword(e)}
            name="password"
            type="password"
            placeholder="Password"
            className="authorization__password"
          />
          <p className="authorization__forget">Забыли пароль?</p>
          <p className="authorization__error">{error}</p>
          <button
            className="authorization__signIn"
            onClick={(e) => handleSignIn(e)}
            type="submit"
          >
            Войти
          </button>
          <div className="authorization__shift">
            <p>Нет аккаунта?</p>
            <button onClick={() => setPage('registration')} type="button">Зарегестрируйтесь</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
