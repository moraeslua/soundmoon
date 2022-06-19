import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as C from './style';
import MusicPlayerContext from '../../context/MusicPlayerContext';
import { handleNameOverflow } from '../../utils';

const propsByRoute = {
  favorites: {
    cardWidth: '650px',
    detailsWidth: '150px',
  },
  album: {
    cardWidth: '500px',
    detailsWidth: '230px',
  },
};

const FAV_MAX_LENGTH = 17;
const ALBUM_MAX_LENGTH = 26;

class MusicCard extends React.Component {
  handlePlayPauseButton = (musicData) => {
    const { audioPlayer, setPlayingNow, playingNow, togglePlayPause } = this.context;
    if (audioPlayer.current) togglePlayPause();
    if (playingNow.trackId === musicData.trackId) return;
    setPlayingNow(musicData);
  }

  render() {
    const {
      data,
      onChange,
      checked,
    } = this.props;
    const {
      isPlaying,
      playingNow: { trackId: currTrackId },
    } = this.context;
    const {
      trackId,
      trackName,
      from,
      artworkUrl500,
      collectionName,
      artistName,
      collectionId,
    } = data;
    return (
      <C.Card cardWidth={ propsByRoute[from].cardWidth }>
        <C.Button
          type="button"
          onClick={ () => this.handlePlayPauseButton({ ...data }) }
        >
          {currTrackId === trackId && isPlaying ? <C.Pause /> : <C.Play />}
        </C.Button>
        {from === 'favorites' && (
          <C.MusicDataContainer>
            <img src={ artworkUrl500 } alt={ collectionName } />
            <div>
              <Link to={ `album/${collectionId}` }>
                <h4>{handleNameOverflow(trackName, FAV_MAX_LENGTH)}</h4>
              </Link>
              <h5>{artistName}</h5>
            </div>
          </C.MusicDataContainer>
        )}
        <C.DetailsContainer detailsWidth={ propsByRoute[from].detailsWidth }>
          {from === 'favorites'
            ? (
              <Link to={ `album/${collectionId}` }>
                <h4>{handleNameOverflow(collectionName, FAV_MAX_LENGTH)}</h4>
              </Link>
            ) : <h4>{handleNameOverflow(trackName, ALBUM_MAX_LENGTH)}</h4>}
        </C.DetailsContainer>
        <C.RightContainer>
          <C.FavoriteLabel htmlFor={ trackId }>
            <input
              id={ trackId }
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              onChange={ onChange }
              checked={ checked }
            />
            {checked ? <C.FillHeart /> : <C.OutlineHeart className="outline-heart" />}
          </C.FavoriteLabel>
          <p>00:29</p>
        </C.RightContainer>
      </C.Card>
    );
  }
}

MusicCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

MusicCard.contextType = MusicPlayerContext;

export default MusicCard;
