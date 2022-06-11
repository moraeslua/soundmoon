import React from 'react';
import Header from '../../components/Header';
import FormSearch from '../../components/SearchBar';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import LoadingMessage from '../../components/Loading';
import AlbumsList from '../../components/AlbumSongs';

class Search extends React.Component {
  state = {
    searchedName: '',
    searchButtonIsDisabled: true,
    loading: false,
    artistAlbums: [],
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
    this.setState({ loading: true });
    const { searchedName } = this.state;
    const albumsArray = await searchAlbumsAPI(searchedName);
    this.setState({ artistAlbums: albumsArray, loading: false });
  };

  render() {
    const { searchButtonIsDisabled, artistAlbums, searchedName, loading } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {loading ? <LoadingMessage /> : <FormSearch
          searchButtonIsDisabled={ searchButtonIsDisabled }
          onChange={ this.handleOnChange }
          onClick={ this.handleSearchButton }
        />}
        {artistAlbums.length === 0
          ? <p>Nenhum álbum foi encontrado</p>
          : <AlbumsList searchedName={ searchedName } artistAlbums={ artistAlbums } /> }
      </div>
    );
  }
}

export default Search;
