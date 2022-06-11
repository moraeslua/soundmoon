import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../../components/MusicCard';
import { addSong, removeSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';
import LoadingMessage from '../../components/Loading';

class Album extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = props;
    this.state = ({
      albumId: id,
      artistName: '',
      collectionName: '',
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

  // Id de cada música é passado para a função no map lá embaixo.
  handleFavoriteSongs = async (trackId) => {
    this.setState({ loading: true });
    const { albumSongs, favoriteSongsIds } = this.state;
    // Se dentro do state FavoriteSongsIds existir algum id igual ao que está sendo passado por parametro,
    // significa que o elemento que contém esse id é checked e que o usuário quer remover ele das músicas favoritas.
    const isRemoving = favoriteSongsIds.some((id) => id === trackId);
    console.log(isRemoving);
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
    const {
      albumSongs,
      artistName,
      collectionName,
      favoriteSongsIds,
      loading,
    } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {loading ? <LoadingMessage />
          : (
            <div>
              <h2 data-testid="artist-name">{artistName}</h2>
              <h3 data-testid="album-name">{collectionName}</h3>
              {albumSongs.map((songInfo) => (<MusicCard
                key={ songInfo.trackName }
                trackId={ songInfo.trackId }
                trackName={ songInfo.trackName }
                previewUrl={ songInfo.previewUrl }
                checked={ favoriteSongsIds.includes(songInfo.trackId) }
                onChange={ () => this.handleFavoriteSongs(songInfo.trackId) }
              />))}
            </div>
          )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
