import React, { useContext } from 'react';
import Context from '../context/Context';
import { UserLinks } from '../../variables/MenuLinks';

const UserLink = () => {
  const { page, setPage, isAuth } = useContext(Context);
  const { icon, title } = UserLinks.find((element) => element.isForAuthorized === isAuth);

  return (
    <button
      type="button"
      onClick={() => {
        setPage(title);
        // if (document.body.offsetWidth <= 600) {
        //   isNavVisible();
        //   burgerState();
        // }
      }}
      className={`menu-item ${title === page ? 'menu-item-active' : ''}`}
      // className={`menu-item ${title === page ? 'menu-item-active' : ''
    // } ${!isAuth && !isAuthorized ? 'menu-item-lock' : ''}`}
    >
      <img src={icon} alt="icon" className="menu-item-icon" />
      {/* { name } */}
      {/* { !isAuth && lock && <img src={lock} alt="lock" className="lock" /> } */}
    </button>
  );
};

export default UserLink;
