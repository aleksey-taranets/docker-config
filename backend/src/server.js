import http from 'http';
import promiseRetry from 'promise-retry';
import { MongoClient } from 'mongodb';

// Env
const port = process.env.PORT || 80;
const env = process.env.NODE_ENV || 'development';
const bPort = process.env.BACKEND_PORT || port;
const dbUser = process.env.MONGODB_USERNAME || '';
const dbPass = process.env.MONGODB_PASSWORD || '';
const mongoDbName = process.env.MONGO_DATABASE || 'app';
const mongoPort = process.env.MONGODB_PORT || 27017;
const mongoHost = process.env.MONGODB_SERVER || 'localhost';

// init db client
const dbUrl = `mongodb://${dbUser}:${dbPass}@${mongoHost}:${mongoPort}/${mongoDbName}`;
const mongoClient = new MongoClient(dbUrl, {
  useNewUrlParser: true,
});
let dbConnections = 0;

// create http server
const server = http.createServer((req, res) => {
  console.log(`Request - ${req.url}`);
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(`<h1>Data from backend!</h1><p>Database connections ${dbConnections}</p><p>NODE_ENV = ${env}</p>`);
});

(async (err) => {
  try {
    await promiseRetry(retry => mongoClient.connect().catch(retry));
    console.log('MongoDb is connected');

    const db = mongoClient.db(mongoDbName);
    const connections = db.collection('connections');

    await connections.insertOne({
      date: new Date()
    });
    dbConnections = await connections.countDocuments();
    server.listen(port, () => {
      console.log(`Server available by the url -- http://localhost:${bPort}`);
    });
  } catch (err) {
    console.log('Error while application run');
    console.error(err);
  }
})();