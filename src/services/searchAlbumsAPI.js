import { changeArtworkResolution } from '../utils';

const ARTWORK_500 = 500;

const searchAlbumsAPI = async (artist) => {
  const artistNameURL = encodeURI(artist).replaceAll('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  const APIResponse = await fetch(getAlbumsAPI);

  const { results } = await APIResponse.json();

  const response = results.map(
    ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      collectionType,
      trackCount,
    }) => ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      collectionType,
      releaseDate,
      releaseYear: new Date(releaseDate).getFullYear(),
      trackCount,
      artworkUrl500: changeArtworkResolution(artworkUrl100, ARTWORK_500),
    }),
  );
  return response;
};

export default searchAlbumsAPI;
