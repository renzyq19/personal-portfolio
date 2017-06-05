import React from 'react';
import PropTypes from 'prop-types';


const Video = props => (
  <video width="100%" height="100%" controls>
    <source src={props.src} />
  </video>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
};
export default Video;
