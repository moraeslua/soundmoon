import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumsList extends React.Component {
  render() {
    const { searchedName, artistAlbums } = this.props;
    return (
      <div>
        <h2>
          Resultado de álbuns de:
          {' '}
          {searchedName}
        </h2>
        <ul>
          {artistAlbums.map((album) => (
            <li key={ album.collectionId }>
              <Link
                data-testid={ `link-to-album-${album.collectionId}` }
                to={ `album/${album.collectionId}` }
              >
                {album.collectionName}
              </Link>
            </li>))}
        </ul>
      </div>
    );
  }
}

AlbumsList.propTypes = {
  searchedName: PropTypes.string.isRequired,
  artistAlbums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AlbumsList;
