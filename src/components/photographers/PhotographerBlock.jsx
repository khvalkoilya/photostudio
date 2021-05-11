import React from 'react';
import PropTypes from 'prop-types';

const PhotographerBlock = ({ data, id }) => {
  const isEven = () => !!(id % 2);

  const images = data.album.map((link, idImage) => (
    <div className={`photographers__image-wrapper-${idImage + 1}`}>
      <img src={link} className="photographers__image" alt="photographers_image" key={link} />
    </div>
  ));

  return (
    <>
      <article className={`photographers ${!isEven() ? 'photographers-black' : ''}`}>
        <div className="container">
          <div className="photographers__album">
            {images}
          </div>
          <div className="photographers__info">
            <div className="photographers__info-image">
              <img alt="profile" src="../../assets/images/profile.png" />
            </div>
            <div className="photographers__info-text">
              <p className="photographers__name">{data.name}</p>
              <p className="photographers__contacts">
                <p className="photographers__telephone">{data.telephone}</p>
                <a className="photographers__instagram" href={`https://www.instagram.com/${data.instagram_account}/`}>
                  <img
                    src={`${!isEven() ? '../../assets/images/instagram-white.svg' : '../../assets/images/instagram-black.svg'}`}
                    alt="instagram account"
                  />
                </a>
              </p>
              <p className="photographers__email">{data.email}</p>
              <p className="photographers__price">{`Стоимость от ${data.price} р/ч`}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

PhotographerBlock.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    album: PropTypes.array,
    telephone: PropTypes.string,
    instagram_account: PropTypes.string,
    email: PropTypes.string,
    price: PropTypes.number,
  }),
};

PhotographerBlock.defaultProps = {
  data: {},
};

export default PhotographerBlock;
