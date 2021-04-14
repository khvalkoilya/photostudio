import React, { useState } from 'react';
import Context from '../context/Context';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

const App = () => {
  const [page, setPage] = useState('home');
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Context.Provider value={{
        page,
        setPage,
        isAuth,
        setIsAuth,
      }}
      >
        <Header isAuth={isAuth} />
        <Main />
        <Footer />
      </Context.Provider>
    </>
  );
};

export default App;
