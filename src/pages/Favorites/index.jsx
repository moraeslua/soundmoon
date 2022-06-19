import React from 'react';
import MusicCard from '../../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import LoadingMessage from '../../components/Loading';
import * as C from './style';

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
      loading ? <LoadingMessage /> : (
        <C.Container data-testid="page-favorites">
          <C.SongsContainer>
            {favoriteSongs.length ? (
              favoriteSongs.map((songInfo) => {
                const {
                  trackId,
                  trackName,
                  previewUrl,
                  artistName,
                  collectionName,
                  artworkUrl500,
                  collectionId,
                } = songInfo;
                return (
                  <MusicCard
                    key={ trackId }
                    data={
                      { trackId: parseInt(trackId, 10),
                        trackName,
                        previewUrl,
                        artistName,
                        collectionName,
                        artworkUrl500,
                        collectionId,
                        from: 'favorites' }
                    }
                    checked={ favoriteSongs.some((s) => s.trackId === trackId) }
                    onChange={ () => this.handleRemoveFavoriteSong(songInfo) }
                  />
                );
              })
            ) : (
              <h2>Você ainda não tem músicas favoritadas</h2>
            )}
          </C.SongsContainer>
        </C.Container>
      )
    );
  }
}

export default Favorites;
