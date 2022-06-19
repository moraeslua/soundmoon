import { changeArtworkResolution } from '../utils';

const ARTWORK_500 = 500;
const HTTP_OK = 200;

const getMusics = async (id) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const { results } = await request.json();

  if (request.status !== HTTP_OK) return null;

  const response = results.map(({ artworkUrl100, ...rest }) => {
    const artworkUrl500 = changeArtworkResolution(artworkUrl100, ARTWORK_500);
    return { ...rest, artworkUrl500 };
  });
  return response;
};

export default getMusics;
