import React, { useContext } from 'react';
import MusicPlayerContext from '../../context/MusicPlayerContext';
import AudioPlayer from '../AudioPlayer';

const Footer = () => {
  const { playingNow } = useContext(MusicPlayerContext);

  return (
    playingNow.trackId ? (
      <footer>
        <AudioPlayer />
      </footer>
    ) : null
  );
};

export default Footer;
