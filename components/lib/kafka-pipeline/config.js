module.exports = {
  kafka: {
    host: process.env.ZOOKEEPER_HOST || '127.0.0.1',
    port: process.env.ZOOKEEPER_PORT || 2181,
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379
  }
};