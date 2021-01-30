const setNameToShow = (req, res, next) => {
  res.locals = {
    name: 'Tintin',
  };
  next();
};

export default setNameToShow;
