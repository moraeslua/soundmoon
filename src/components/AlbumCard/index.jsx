/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

const STRING_MAX_LENGTH = 18;

class ArtistAlbuns extends React.Component {
  render() {
    const {
      album: {
        collectionId,
        artworkUrl500,
        collectionName,
        releaseYear,
        collectionType,
      },
    } = this.props;
    const name = `${collectionName.slice(0, STRING_MAX_LENGTH)}`;
    const oficialName = collectionName.length > name.length ? `${name}...` : name;
    return (
      <C.Card>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `album/${collectionId}` }
        >
          <img src={ artworkUrl500 } alt={ collectionName } />
          <C.Content>
            <C.Name>
              {oficialName}
            </C.Name>
            <C.Info>
              {collectionType}
              |
              {releaseYear}
            </C.Info>
          </C.Content>
        </Link>
      </C.Card>
    );
  }
}

export default ArtistAlbuns;
