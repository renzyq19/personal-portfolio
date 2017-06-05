import React from 'react';
import PropTypes from 'prop-types';

const VimeoFrame = props => (
  <iframe
    src={`https://player.vimeo.com/video/${props.videoID}`}
    width="100%"
    frameBorder="0"
    allowFullScreen=""
  />
);

VimeoFrame.propTypes = {
  videoID: PropTypes.number.isRequired,
};

export default VimeoFrame;
