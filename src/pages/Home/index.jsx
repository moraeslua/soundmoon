import React from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import LoadingMessage from '../../components/Loading';
import AlbumCard from '../../components/AlbumCard';
import MusicPlayerContext from '../../context/MusicPlayerContext';
import * as C from './styles';

class Home extends React.Component {
  state = {
    searchedName: '',
    searchButtonIsDisabled: true,
    loading: false,
    artistAlbums: null,
  }

  componentDidMount() {
    this.setState({ searchedName: '' });
  }

  handleOnChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.handleSearchButtonState());
  }

  handleSearchButtonState = () => {
    const MAX_VALUE = 2;
    const { searchedName } = this.state;
    this.setState({
      searchButtonIsDisabled: searchedName.length < MAX_VALUE,
    });
  }

  handleSearchButton = async () => {
    this.setState({ artistAlbums: null });
    this.setState({ loading: true });
    const { searchedName } = this.state;
    const albumsArray = await searchAlbumsAPI(searchedName);
    this.setState({ artistAlbums: albumsArray, loading: false });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.handleSearchButton();
  }

  render() {
    const { searchButtonIsDisabled, artistAlbums, searchedName, loading } = this.state;
    return (
      <C.Container data-testid="page-search">
        {loading ? <LoadingMessage /> : (
          <C.SearchContainer>
            <C.Form onSubmit={ this.handleSearchSubmit }>
              <C.SearchBar
                id="searchedName"
                placeholder="Procure por um artista"
                data-testid="search-artist-input"
                onChange={ this.handleOnChange }
              />
              <C.SearchButton
                id="searchButton"
                type="button"
                data-testid="search-artist-button"
                disabled={ searchButtonIsDisabled }
                onClick={ this.handleSearchButton }
              >
                Pesquisar
              </C.SearchButton>
            </C.Form>
            { !artistAlbums && <C.Feedback>O que você quer ouvir hoje?</C.Feedback>}
            { artistAlbums?.length === 0
              && <C.Feedback>Nenhum álbum foi encontrado</C.Feedback>}
            {artistAlbums?.length > 0 && (
              <C.Feedback>
                Resultados para álbuns de:
                {' '}
                {searchedName}
              </C.Feedback>
            )}
          </C.SearchContainer>
        )}
        { artistAlbums?.length > 0 && (
          <C.UnorderedList>
            {
              artistAlbums.map((album) => (
                <li key={ album.collectionId }>
                  <AlbumCard album={ album } />
                </li>
              ))
            }
          </C.UnorderedList>
        )}
      </C.Container>
    );
  }
}

Home.contextType = MusicPlayerContext;

export default Home;
