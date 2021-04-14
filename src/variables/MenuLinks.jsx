import React from 'react';
import Home from '../components/home/Home';
import Photostudios from '../components/photostudios/Photostudios';
import Photographers from '../components/photographers/Photographers';
import Contacts from '../components/contacts/Contacts';
import SignIn from '../components/signIn/SignIn';

export const MenuLinks = [
  {
    id: 0,
    name: 'Главная',
    isForAuthorized: false,
    // icon: '../../assets/images/dumbbell.svg',
    title: 'home',
    render: (id, title) => (
      <Home key={`${id}-${title}`} />
    ),
  },
  {
    id: 1,
    name: 'Фотостудии',
    isForAuthorized: true,
    // lock: '../../assets/images/locked-padlock.svg',
    // icon: '../../assets/images/dictionary.svg',
    title: 'photostudios',
    render: (id, title) => <Photostudios key={`${id}-${title}`} />,
  },
  {
    id: 2,
    name: 'Фотографы',
    isForAuthorized: true,
    // lock: '../../assets/images/locked-padlock.svg',
    // icon: '../../assets/images/game-controller.svg',
    title: 'photographers',
    render: (id, title) => <Photographers key={`${id}-${title}`} />,
  },
  {
    id: 3,
    name: 'Контакты',
    isForAuthorized: true,
    // icon: '../../assets/images/flask.svg',
    title: 'contacts',
    render: (id, title) => <Contacts key={`${id}-${title}`} />,
  },
];

export const UserLinks = [
  {
    id: 0,
    name: 'Вход',
    isForAuthorized: false,
    // icon: '../../assets/images/flask.svg',
    title: 'signIn',
    render: (id, title) => <SignIn key={`${id}-${title}`} />,
  },
  {
    id: 1,
    name: 'Профиль',
    isForAuthorized: true,
    // icon: '../../assets/images/flask.svg',
    title: 'signI1n',
    render: (id, title) => <SignIn key={`${id}-${title}`} />,
  },
];
