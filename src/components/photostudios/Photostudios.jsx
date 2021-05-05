import React from 'react';
import PhotostudioBlock from './PhotostudioBlock';

const Photostudios = () => {
  const photostudiosData = [
    {
      name: 'FIRST',
    },
    {
      name: 'SECOND',
    },
    {
      name: 'THIRD',
    },
    {
      name: 'FOURTH',
    },
  ];

  const photostudiosBlocks = photostudiosData.map((data, id) => (
    <PhotostudioBlock
      data={data}
      id={id}
    />
  ));

  return (
    <section className="photostudio">
      {photostudiosBlocks}
    </section>
  );
};

export default Photostudios;
