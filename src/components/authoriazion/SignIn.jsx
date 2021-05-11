/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useState,
  useContext,
  useEffect,
  useRef,
} from 'react';
import Context from '../context/Context';
import {
  fetchAccounts,
  handleEmail,
  handlePassword,
  showPassword,
} from './utils';

const SignIn = () => {
  const { setPage, setIsAuth, setRole } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [accounts, setAccounts] = useState(null);

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  function badResult(text) {
    setEmail('');
    setPassword('');
    inputEmail.current.focus();
    setError(text);
  }

  useEffect(() => {
    fetchAccounts(setAccounts);
  }, []);

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
        badResult('Введен неправильный пароль');
      }
    } else {
      badResult('Введен неправильный email');
    }
  }

  return (
    <section className="authorization">
      <div className="container">
        <form>
          <h1 className="authorization__title">Welcome</h1>
          <h2 className="authorization__name-company">KI_Studio</h2>
          <p className="authorization__description">Введите свою почту и пароль, чтобы войти</p>
          <div className="authorization__input-block">
            <span className="authorization__input-block__email-span" />
            <input
              value={email}
              onChange={(e) => handleEmail(e, setEmail)}
              name="email"
              type="text"
              placeholder="Email"
              ref={inputEmail}
              className="authorization__email"
            />
          </div>
          <div className="authorization__input-block">
            <span className="authorization__input-block__password-span-before" />
            <input
              value={password}
              onChange={(e) => handlePassword(e, setPassword)}
              name="password"
              type="password"
              placeholder="Password"
              ref={inputPassword}
              className="authorization__password"
            />
            <span
              className="authorization__input-block__password-span-after"
              onClick={
                () => showPassword(inputPassword)
              }
            />
          </div>
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
