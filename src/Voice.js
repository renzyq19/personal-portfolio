import React from 'react';
import voicereel from './voicereel.mp3';
import './Voice.css';

const Voice = () => (
  <div className="main" >
    <div className="box" >
      <audio src={voicereel} />
      <div className="player">
        <div className="progressBar">
          <div className="progress" />
        </div>
      </div>
    </div>
  </div>
);

export default Voice;
