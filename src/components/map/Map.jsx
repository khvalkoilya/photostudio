import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapLayout = () => {
  const mapState = {
    center: [53.90454497068532, 27.55214480275488],
    zoom: 10,
  };

  const coordinates = [
    [53.91500706098241, 27.570947769438177],
    [53.92010386175489, 27.599981698274334],
    [53.867239543010975, 27.662740000123424],
    [53.901079637645644, 27.657692198273512],
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
