const incrementLives = () => {
  let lives = 0;
  return () => {
    return ++lives;
  };
};

export default incrementLives;
