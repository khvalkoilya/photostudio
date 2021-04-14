import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

const MenuLink = ({ name, title, isForAuthorized }) => {
  // const page = 'main';
  const { page, setPage, isAuth } = useContext(Context);
  return (
    <button
      type="button"
      onClick={isAuth || !isForAuthorized ? (() => {
        setPage(title);
        // if (document.body.offsetWidth <= 600) {
        //   isNavVisible();
        //   burgerState();
        // }
      }) : undefined}
      // className={`menu-item ${title === page ? 'menu-item-active' : ''}`}
      className={`menu-item ${title === page ? 'menu-item-active' : ''}${!isAuth && isForAuthorized ? 'menu-item-lock' : ''}`}
    >
      {/* <img src={icon} alt="icon" className="menu-item-icon" /> */}
      { name }
      {/* { !isAuth && lock && <img src={lock} alt="lock" className="lock" /> } */}
    </button>
  );
};

MenuLink.propTypes = {
  name: PropTypes.string.isRequired,
  isForAuthorized: PropTypes.bool.isRequired,
  // isAuth: PropTypes.bool.isRequired,
  // lock: PropTypes.string,
  // icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // burgerState: PropTypes.func.isRequired,
  // isNavVisible: PropTypes.func.isRequired,
};

export default MenuLink;
