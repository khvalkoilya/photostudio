import React, { useContext } from 'react';
import Context from '../context/Context';

const Profile = () => {
  const { setIsAuth, setPage, role } = useContext(Context);

  return (
    <div className="container">
      <h1>{`Здравствуй, ${role}!`}</h1>
      <button
        type="button"
        onClick={() => {
          setIsAuth(false);
          setPage('home');
        }}
      >
        ВЫЙТИ
      </button>
    </div>
  );
};

export default Profile;
