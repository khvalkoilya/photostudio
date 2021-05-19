/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-useless-escape */
import React, {
  useState,
  useContext,
  useEffect,
  useRef,
} from 'react';
// import { setAccount } from '../../utils/api';
import Context from '../context/Context';
import {
  fetchAccounts,
  handleEmail,
  handlePasswordFirst,
  handlePasswordSecond,
  showPassword,
} from './utils';

const Registration = () => {
  const { setPage, setIsAuth, setRole } = useContext(Context);
  const [email, setEmail] = useState('');
  const [passwordFirst, setPasswordFirst] = useState('');
  const [passwordSecond, setPasswordSecond] = useState('');
  const [error, setError] = useState('');
  const [accounts, setAccounts] = useState(null);

  const inputEl = useRef(null);
  const inputPasswordFirst = useRef(null);
  const inputPasswordSecond = useRef(null);

  function badResult(text) {
    setEmail('');
    setPasswordFirst('');
    setPasswordSecond('');
    inputEl.current.focus();
    setError(text);
  }

  function saveAccount() {
    const currentAccount = [
      {
        login: email,
        password: passwordFirst,
        type: 'user',
      },
    ];

    setAccounts(accounts.concat(currentAccount));
  }

  useEffect(() => {
    fetchAccounts(setAccounts);
  }, []);

  function handleRegistration(e) {
    e.preventDefault();
    const credentials = accounts.find((cred) => cred.login === email);
    if (!credentials) {
      if (!email.match(/[A-Za-z0-9.!$&*-=^`|~#%'+\/?_{}]+@[A-Za-z0-9-]+\.[A-Za-z]+/g)) {
        badResult('Введите email правильно');
      } else if (!passwordFirst.match(/\w{3,}/gm)) {
        badResult('Введите пароль правильно');
      } else if (passwordFirst !== passwordSecond) {
        badResult('Пароли не совпадают');
      } else {
        try {
          saveAccount();
          setError('');
          setIsAuth(true);
          setRole('user');
          setPage('home');
        } catch (err) {
          console.error(err.message);
          badResult('Проблемы с сервером');
        }
      }
    } else {
      badResult('Данный email занят');
    }
  }

  return (
    <section className="authorization">
      <div className="container">
        <form>
          <h1 className="authorization__title">Регистрация</h1>
          <p className="authorization__description">Заполните все поля, чтобы создать аккаунт</p>
          <div className="authorization__input-block">
            <span className="authorization__input-block__email-span" />
            <input
              value={email}
              onChange={(e) => handleEmail(e, setEmail)}
              name="email"
              type="text"
              placeholder="Email"
              ref={inputEl}
              className="authorization__email"
            />
          </div>
          <div className="authorization__input-block__password authorization__input-block">
            <span className="authorization__input-block__password-span-before" />
            <input
              value={passwordFirst}
              onChange={(e) => handlePasswordFirst(e, setPasswordFirst)}
              name="password"
              type="password"
              placeholder="Password"
              ref={inputPasswordFirst}
              className="authorization__password"
            />
            <span
              className="authorization__input-block__password-span-after"
              onClick={
                () => showPassword(inputPasswordFirst)
              }
            />
          </div>
          <div className="authorization__input-block__password authorization__input-block">
            <span className="authorization__input-block__password-span-before" />
            <input
              value={passwordSecond}
              onChange={(e) => handlePasswordSecond(e, setPasswordSecond)}
              name="password"
              type="password"
              placeholder="Confirm password"
              ref={inputPasswordSecond}
              className="authorization__password"
            />
            <span
              className="authorization__input-block__password-span-after"
              onClick={
                () => showPassword(inputPasswordSecond)
              }
            />
          </div>
          <p className="authorization__error">{error}</p>
          <button
            className="authorization__signIn"
            onClick={(e) => handleRegistration(e)}
            type="submit"
          >
            Создать
          </button>
          <div className="authorization__shift">
            <p>Уже есть аккаунт?</p>
            <button onClick={() => setPage('signIn')} type="button">Войдите</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
