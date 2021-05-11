/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PhotostudioBlock from './PhotostudioBlock';
import { getPhotostuios } from '../../utils/api';
import PHOTOSTUDIOS_TEST from '../../variables/testStudios';

const Photostudios = () => {
  const [photostudiosData, setPhotostudiosData] = useState([]);
  const [isReducePrice, setIsReducePrice] = useState(false);
  const [isReduceName, setIsReduceName] = useState(true);

  useEffect(() => {
    async function fetchStudios() {
      try {
        const response = await getPhotostuios();
        setPhotostudiosData(response);
      } catch (err) {
        setPhotostudiosData(PHOTOSTUDIOS_TEST);
        console.error(err.message);
      }
    }

    fetchStudios();
  }, []);

  const photostudiosBlocks = photostudiosData.map((data, id) => (
    <PhotostudioBlock
      data={data}
      id={id}
      key={`${data.name + data.description}`}
    />
  ));

  function sortStudios(type) {
    switch (type) {
      case 'name': {
        photostudiosData.sort((a, b) => {
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
          photostudiosData.sort((a, b) => b.price - a.price);
        } else {
          photostudiosData.sort((a, b) => a.price - b.price);
        }
        setIsReducePrice(!isReducePrice);
        break;
      }
      default: break;
    }
    setPhotostudiosData([].concat(photostudiosData));
  }

  return (
    <section className="photostudio">
      <div className="container">
        <div className="photostudio__sort">
          <p>Сортировать по:</p>
          <p onClick={() => sortStudios('name')}>имени</p>
          <p onClick={() => sortStudios('price')}>цене</p>
        </div>
      </div>
      {photostudiosBlocks}
    </section>
  );
};

export default Photostudios;
