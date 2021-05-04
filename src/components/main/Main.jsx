import React, { useContext } from 'react';
import { MenuLinks, UserLinks } from '../../variables/MenuLinks';
import Context from '../context/Context';

const Main = () => {
  const main = MenuLinks
    .concat(UserLinks);
  //   .concat(ABOUT_US)
  //   .concat(GAMES_VARIABLES)
  //   .concat(SHORT_STATISTICS);
  const { page } = useContext(Context);
  return (
    <main className="main">
      {main.map((element) => page === element.title && element.render(element.id, element.title))}
    </main>
  );
};

export default Main;
