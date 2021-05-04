import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapLayout = () => {
  const mapState = {
    center: [53.9000000, 27.5666700],
    zoom: 5,
  };

  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521],
  ];

  return (
    <YMaps>
      <Map defaultState={mapState} className="home__map-block">
        {coordinates.map((coordinate) => <Placemark geometry={coordinate} key={coordinate} />)}
      </Map>
    </YMaps>
  );
};

export default MapLayout;
