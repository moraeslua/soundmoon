import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = props;
    this.state = ({
      albumId: id,
      artistName: '',
      collectionName: '',
      albumSongs: [],
    });
  }

  componentDidMount() {
    this.getAlbumSongs();
  }

  getAlbumSongs = async () => {
    const { albumId } = this.state;
    const albumSongsData = await getMusics(albumId);
    const albumSongs = albumSongsData.filter((_song, index) => index !== 0);
    const { artistName, collectionName } = albumSongsData[0];
    this.setState({
      artistName,
      collectionName,
      albumSongs,
    });
  }

  render() {
    const { albumSongs, artistName, collectionName } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <h2 data-testid="artist-name">{artistName}</h2>
          <h3 data-testid="album-name">{collectionName}</h3>
          {albumSongs.map((songInfo) => (<MusicCard
            key={ songInfo.trackName }
            trackName={ songInfo.trackName }
            previewUrl={ songInfo.previewUrl }
          />))}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
