import React from 'react';
import { MenuLinks } from '../../variables/MenuLinks';
import MenuLink from '../menuLink/MenuLink';
import UserLink from '../userLink/UserLink';

const Header = () => {
  const headerLinks = MenuLinks.map((link) => (
    <MenuLink
      key={`${link.id}-${link.title}`}
      name={link.name}
      id={link.id}
      title={link.title}
      isForAuthorized={link.isForAuthorized}
    />
  ));

  const userLink = <UserLink />;

  return (
    <header className="header">
      <div className="container">
        <div className="logo">KI_Studio</div>
        <nav className="main-nav">
          {headerLinks}
          {userLink}
        </nav>
      </div>
    </header>
  );
};

export default Header;
