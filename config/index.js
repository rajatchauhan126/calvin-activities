const secret = require('../secret.js');

module.exports = {
  connectionString: {
    keyspace: 'testdb',
    contact: '172.23.238.134',
    port: '9042',
  },
  secretKey: secret,
  dao: process.env.DAO || 'cassandra',
  kafka: {
    host: '172.23.238.134',
    port: '2181',
    topics: { topic: 'multiplex', offset: 0 },
    options: {
      autoCommit: false,
      fromOffset: true,
    },
    activitiesTopic: 'activities',
    multiplexerTopic: 'm1',
    multiplexerConsumerGroup: 'm1CG',
  },
  redis: {
    host: '172.23.238.134',
    port: '6379',
  },
  namespace: 'L1R',
  namespacemul: 'multiplexer',
  namespaceroutemanager: 'routesmanager',
};
