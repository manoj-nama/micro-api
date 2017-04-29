const config = {
  mongo: {
    host: "ds123371.mlab.com:23371/heroku_x1gzz76r",
    user: "",
    password: ""
  }
};

const mongo_uri = `mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}`;

module.exports = {
  config,
  mongo_uri
};
