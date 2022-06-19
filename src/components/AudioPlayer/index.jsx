import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MusicPlayerContext from '../../context/MusicPlayerContext';
import * as C from './style';

const BACK_AND_FOWARD_VALUE = 5;

const AudioPlayer = () => {
  const {
    playingNow: {
      previewUrl,
      artworkUrl500,
      artistName,
      collectionName,
      trackName,
      collectionId,
    },
    isPlaying,
    duration,
    currentTime,
    audioPlayer,
    progressBar,
    animationRef,
    togglePlayPause,
    changeByRangeInput,
    handleLoadedMetaData,
  } = useContext(MusicPlayerContext);

  const calculateTime = (secs) => {
    const secsAreInvalid = Number.isNaN(Number(secs));
    if (secsAreInvalid) return '00:00';

    const BASE_60 = 60;
    const IS_UNDER_TEN = 10;

    const minutes = Math.floor(secs / BASE_60);
    const formatedMinutes = minutes < IS_UNDER_TEN ? `0${minutes}` : `${minutes}`;

    const secsLeft = Math.floor(secs % BASE_60);
    const formatedSecsLeft = secsLeft < IS_UNDER_TEN ? `0${secsLeft}` : `${secsLeft}`;
    //
    return `${formatedMinutes}:${formatedSecsLeft}`;
  };

  const fowardTenSecs = () => {
    progressBar.current.value = Number(progressBar.current.value + BACK_AND_FOWARD_VALUE);
    changeByRangeInput();
  };

  const backTenSecs = () => {
    progressBar.current.value = Number(progressBar.current.value - BACK_AND_FOWARD_VALUE);
    changeByRangeInput();
  };

  useEffect(() => () => {
    cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    previewUrl && (
      <C.Container>
        <C.MusicDataContainer>
          <img src={ artworkUrl500 } alt={ collectionName } />
          <div>
            <Link to={ `album/${collectionId}` } replace><h4>{trackName}</h4></Link>
            <h5>{artistName}</h5>
          </div>
        </C.MusicDataContainer>
        <C.AudioPlayer>
          <C.Controls>
            <C.Audio
              ref={ audioPlayer }
              src={ previewUrl }
              preload="metadata"
              onLoadedMetadata={ handleLoadedMetaData }
            />
            <C.Button
              type="button"
              onClick={ backTenSecs }
            >
              <C.ArrowLeft />
              {' '}
              05
            </C.Button>
            <C.Button
              onClick={ togglePlayPause }
              type="button"
            >
              {isPlaying ? <C.Pause /> : <C.Play />}
            </C.Button>
            <C.Button
              type="button"
              onClick={ fowardTenSecs }
            >
              05
              {' '}
              <C.ArrowRight />
            </C.Button>
          </C.Controls>
          <C.ProgressBarContainer>
            {/* {current time} */}
            <p>{calculateTime(currentTime)}</p>
            {/* {progress bar} */}
            <div>
              <C.ProgressBar
                ref={ progressBar }
                type="range"
                defaultValue="0"
                onChange={ changeByRangeInput }
              />
            </div>
            {/* {duration} */}
            <p>{calculateTime(duration)}</p>
          </C.ProgressBarContainer>
        </C.AudioPlayer>
      </C.Container>
    )
  );
};

export default AudioPlayer;
