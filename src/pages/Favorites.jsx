import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import LoadingMessage from '../components/LoadingMessage';

class Favorites extends React.Component {
  state = {
    favoriteSongs: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const favoriteSongs = await getFavoriteSongs();
    console.log('favorite songs', favoriteSongs);
    this.setState({ favoriteSongs, loading: false });
  }

  handleRemoveFavoriteSong = async (songInfo) => {
    const { favoriteSongs } = this.state;
    this.setState({ loading: true });
    await removeSong(songInfo);
    const songIdToRemove = songInfo.trackId;
    const newFavorites = favoriteSongs.filter((s) => s.trackId !== songIdToRemove);
    this.setState({ favoriteSongs: newFavorites, loading: false });
  }

  render() {
    const { favoriteSongs, loading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <div>
          {loading ? <LoadingMessage /> : (favoriteSongs.map((songInfo) => {
            console.log(typeof songInfo.trackId);
            return (
              <MusicCard
                key={ songInfo.trackName }
                trackId={ parseInt(songInfo.trackId, 10) }
                trackName={ songInfo.trackName }
                previewUrl={ songInfo.previewUrl }
                checked={ favoriteSongs.some((s) => s.trackId === songInfo.trackId) }
                onChange={ () => this.handleRemoveFavoriteSong(songInfo) }
              />);
          }))}
        </div>
      </div>
    );
  }
}

export default Favorites;
