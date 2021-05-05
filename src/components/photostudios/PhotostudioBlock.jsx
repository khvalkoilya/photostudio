import React from 'react';
import PropTypes from 'prop-types';

const PhotostudioBlock = ({ data, id }) => {
  const isEven = (num) => !!(num % 2);
  return (
    <>
      <article className={`photostudio ${!isEven(id) ? 'photostudio-black' : ''}`}>
        <div className="container">
          {data.name}
        </div>
      </article>
    </>
  );
};

PhotostudioBlock.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
  }),
};

PhotostudioBlock.defaultProps = {
  data: {
    name: '',
  },
};

export default PhotostudioBlock;
