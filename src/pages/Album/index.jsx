import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../../components/MusicCard';
import { addSong, removeSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';
import LoadingMessage from '../../components/Loading';
import MusicPlayerContext from '../../context/MusicPlayerContext';
import * as C from './styles';

class Album extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = props;
    this.state = ({
      collectionId: id,
      artistName: '',
      collectionName: '',
      artworkUrl500: '',
      trackCount: 0,
      albumSongs: [],
      loading: false,
      favoriteSongsIds: [],
    });
  }

  async componentDidMount() {
    this.getAlbumSongs();
    const favoriteSongsFromAPI = await getFavoriteSongs();
    const favoriteSongsIds = favoriteSongsFromAPI.map((song) => song.trackId);
    this.setState({ favoriteSongsIds });
  }

  handleFavoriteSongs = async (trackId) => {
    this.setState({ loading: true });

    const { albumSongs, favoriteSongsIds } = this.state;
    const isRemoving = favoriteSongsIds.some((id) => id === trackId);
    const foundSong = albumSongs.find((song) => song.trackId === trackId);

    if (!isRemoving) {
      await addSong(foundSong);
      const newFavorites = [...favoriteSongsIds, trackId];
      this.setState({ loading: false, favoriteSongsIds: newFavorites });
    } else {
      await removeSong(foundSong);
      const newFavorites = favoriteSongsIds.filter((id) => id !== trackId);
      this.setState({ loading: false, favoriteSongsIds: newFavorites });
    }
  }

  getAlbumSongs = async () => {
    this.setState({ loading: true });

    const { collectionId } = this.state;
    const albumSongsData = await getMusics(collectionId);

    const { history } = this.props;

    if (!albumSongsData) {
      this.setState({ loading: false });
      history.push('/404');
      return;
    }

    const albumSongs = albumSongsData.filter((_song, index) => index !== 0);

    const { artistName, collectionName, artworkUrl500, trackCount } = albumSongsData[0];
    this.setState({
      artistName,
      collectionName,
      artworkUrl500,
      albumSongs,
      trackCount,
    });

    this.setState({ loading: false });
  }

  render() {
    const {
      collectionId,
      albumSongs,
      artistName,
      collectionName,
      favoriteSongsIds,
      loading,
      artworkUrl500,
      trackCount,
    } = this.state;
    return (
      <C.Container data-testid="page-album">
        {loading ? <LoadingMessage />
          : (
            <>
              <C.CollectionContainer>
                <img src={ artworkUrl500 } alt={ collectionName } />
                <C.Content>
                  <h3 data-testid="album-name">{collectionName}</h3>
                  <h5 data-testid="artist-name">
                    {artistName}
                    {' '}
                    |
                    {' '}
                    {trackCount}
                    {' '}
                    songs
                  </h5>
                </C.Content>
              </C.CollectionContainer>
              <C.SongsContainer>
                <C.SongsList>
                  {albumSongs.map(({ trackId, trackName, previewUrl }) => (
                    <MusicCard
                      key={ trackId }
                      data={
                        { trackId,
                          trackName,
                          previewUrl,
                          artistName,
                          collectionName,
                          collectionId,
                          artworkUrl500,
                          from: 'album' }
                      }
                      checked={ favoriteSongsIds.includes(trackId) }
                      onChange={ () => this.handleFavoriteSongs(trackId) }
                    />))}
                </C.SongsList>
              </C.SongsContainer>
            </>
          )}
      </C.Container>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

Album.contextType = MusicPlayerContext;

export default Album;
