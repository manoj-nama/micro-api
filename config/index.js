const config = {
  mongo: {
    host: "ds123371.mlab.com:23371/heroku_x1gzz76r",
    user: "microservice-integration",
    password: "igdefault"
  },
  authServer:{
    baseUrl: 'https://micro-auth.herokuapp.com/'
  }
};

const mongo_uri = `mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}`;

module.exports = {
  config,
  mongo_uri
};
