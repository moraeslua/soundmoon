const handleNameOverflow = (name, maxLength) => {
  const sliced = `${name.slice(0, maxLength)}`;
  const formated = name.length > sliced.length ? `${sliced}...` : sliced;
  return formated;
};

export default handleNameOverflow;
