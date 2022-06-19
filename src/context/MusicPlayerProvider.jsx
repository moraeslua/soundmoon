import React, { useMemo, useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import MusicPlayerContext from './MusicPlayerContext';

const MusicPlayerProvider = ({ children }) => {
  const [playingNow, setPlayingNow] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef(null);
  const progressBar = useRef(0);
  const animationRef = useRef(null);

  const changeCurrTimeAndProgressBarStyle = useCallback(() => {
    const maxDuration = progressBar.current.max;
    const currDuration = progressBar.current.value;

    progressBar.current.style.setProperty(
      '--seek-before-width', `${(currDuration / maxDuration) * 100}%`,
    );

    setCurrentTime(currDuration);
  }, []);

  const changeByRangeInput = useCallback(() => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrTimeAndProgressBarStyle();
  }, [changeCurrTimeAndProgressBarStyle]);

  const whilePlaying = useCallback(() => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrTimeAndProgressBarStyle();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }, [changeCurrTimeAndProgressBarStyle]);

  const togglePlayPause = useCallback(() => {
    const currPlayingValue = !isPlaying;

    setIsPlaying(currPlayingValue);
    if (currPlayingValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      return;
    }
    audioPlayer.current.pause();
    cancelAnimationFrame(animationRef.current);
  }, [isPlaying, whilePlaying]);

  const handleLoadedMetaData = useCallback(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;

    togglePlayPause();
  }, [togglePlayPause]);

  useEffect(() => {
    if (progressBar.current.value === progressBar.current.max) {
      setIsPlaying(false);
      cancelAnimationFrame(animationRef.current);
    }
  }, [currentTime]);

  const contextValue = useMemo(() => ({
    playingNow,
    setPlayingNow,
    isPlaying,
    setIsPlaying,
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
    audioPlayer,
    progressBar,
    animationRef,
    togglePlayPause,
    handleLoadedMetaData,
    changeByRangeInput,
  }), [
    currentTime,
    duration,
    isPlaying,
    playingNow,
    togglePlayPause,
    changeByRangeInput,
    handleLoadedMetaData,
  ]);

  return (
    <MusicPlayerContext.Provider value={ contextValue }>
      {children}
    </MusicPlayerContext.Provider>
  );
};

MusicPlayerProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MusicPlayerProvider;
