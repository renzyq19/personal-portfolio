import React from 'react';
import voicereel from './voicereel.mp3';
import './Voice.css';

class Voice extends React.Component {
  handleProgressUpdate() {
  }
  render() {
    return (
      <div className="main" >
        <div className="box" >
          <audio src={voicereel} />
          <div className="player">
            <button className="play_button">
              <i className="material-icons md-48">play_arrow</i>
            </button>
            <ProgressBar onClick={this.handleProgressUpdate} />
            <input
              type="range" name="volume" className="player_slider"
              min="0" max="1" step="0.1"
              defaultValue="1"
            />
          </div>
        </div>
      </div>
    );
  }
}

const ProgressBar = (props) => (
  <div className="progress_bar" onClick={props.onClick}>
    <div className="progress" />
  </div>
);

export default Voice;
