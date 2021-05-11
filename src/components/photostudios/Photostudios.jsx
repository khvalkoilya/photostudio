import React, { useState, useEffect } from 'react';
import PhotostudioBlock from './PhotostudioBlock';
import { getPhotostuios } from '../../utils/api';
import PHOTOSTUDIOS_TEST from '../../variables/testStudios';

const Photostudios = () => {
  const [photostudiosData, setPhotostudiosData] = useState([]);
  // const [photostudiosBlocks, setPhotostudiosBlocks] = useState([]);

  useEffect(() => {
    async function fetchStudios() {
      try {
        const response = await getPhotostuios();
        setPhotostudiosData(response);
        console.log('1');
      } catch (err) {
        setPhotostudiosData(PHOTOSTUDIOS_TEST);
        console.log('2');
        console.error(err.message);
      }
    }

    fetchStudios();
  }, []);

  const photostudiosBlocks = photostudiosData.map((data, id) => (
    <PhotostudioBlock
      data={data}
      id={id}
      key={`${id - data.description}`}
    />
  ));

  return (
    <section className="photostudio">
      {photostudiosBlocks}
    </section>
  );
};

export default Photostudios;
