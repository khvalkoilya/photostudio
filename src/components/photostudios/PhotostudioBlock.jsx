import React from 'react';
import PropTypes from 'prop-types';

const PhotostudioBlock = ({ data, id }) => {
  const isEven = () => !!(id % 2);

  const images = data.album.map((link) => (
    <img src={link} className="photostudio__image" alt="studio_image" key={link} />
  ));

  return (
    <>
      <article className={`photostudio ${!isEven() ? 'photostudio-black' : ''}`}>
        <div className="container">
          <h1 className="photostudio__name">{`"${data.name}"`}</h1>
          <div className="photostudio__album">
            {images}
          </div>
          <div className="photostudio__info">
            <p className="photostudio__description">{data.description}</p>
            <p className="photostudio__address">{`г.${data.city} ул.${data.street} д.${data.house}`}</p>
            <p className="photostudio__price">{`Стоимость от ${data.price} руб`}</p>
            <p className="photostudio__telephone">{data.telephone}</p>
            <a className="photostudio__instagram" href={`https://www.instagram.com/${data.instagram_account}/`}>
              <img
                src={`${!isEven() ? '../../assets/images/instagram-white.svg' : '../../assets/images/instagram-black.svg'}`}
                alt="instagram account"
              />
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

PhotostudioBlock.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    album: PropTypes.array,
    description: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.number,
    price: PropTypes.number,
    telephone: PropTypes.string,
    instagram_account: PropTypes.string,
  }),
};

PhotostudioBlock.defaultProps = {
  data: {
    name: '',
  },
};

export default PhotostudioBlock;
