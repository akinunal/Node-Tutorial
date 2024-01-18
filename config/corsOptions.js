const whiteList = ['https://www.google.com', 'http://127.0.0.1:2020'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) { // handle undefined origin on development
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS!'));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;