const changeArtworkResolution = (artWork, resolution) => {
  const artWorkSplited = artWork.split('/');
  const artworkUrl = `${
    artWorkSplited
      .slice(0, artWorkSplited.length - 1)
      .join('/')}/${resolution}x${resolution}bb.jpg`;
  return artworkUrl;
};

export default changeArtworkResolution;
