/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PhotographerBlock from './PhotographerBlock';
// import { getPhotostuios } from '../../utils/api';
import PHOTOGRAPHERS_TEST from '../../variables/testPhotographers';

const Photographers = () => {
  const [photographersData, setPhotographersData] = useState([]);
  const [isReducePrice, setIsReducePrice] = useState(false);
  const [isReduceName, setIsReduceName] = useState(true);

  useEffect(() => {
    function fetchPhotographers() {
      setPhotographersData(PHOTOGRAPHERS_TEST);
    }

    fetchPhotographers();
  }, []);

  const photographersBlock = photographersData.map((data, id) => (
    <PhotographerBlock
      data={data}
      id={id}
      key={`${data.name + data.email}`}
    />
  ));

  function sortPhotographers(type) {
    switch (type) {
      case 'name': {
        photographersData.sort((a, b) => {
          let nameA;
          let nameB;
          if (isReduceName) {
            nameA = a.name.toLowerCase();
            nameB = b.name.toLowerCase();
          } else {
            nameB = a.name.toLowerCase();
            nameA = b.name.toLowerCase();
          }
          setIsReduceName(!isReduceName);

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      }
      case 'price': {
        if (isReducePrice) {
          photographersData.sort((a, b) => b.price - a.price);
        } else {
          photographersData.sort((a, b) => a.price - b.price);
        }
        setIsReducePrice(!isReducePrice);
        break;
      }
      default: break;
    }
    setPhotographersData([].concat(photographersData));
  }

  return (
    <section className="photographers">
      <div className="container">
        <div className="photographers__sort">
          <p>Сортировать по:</p>
          <p onClick={() => sortPhotographers('name')}>имени</p>
          <p onClick={() => sortPhotographers('price')}>цене</p>
        </div>
      </div>
      {photographersBlock}
    </section>
  );
};

export default Photographers;
