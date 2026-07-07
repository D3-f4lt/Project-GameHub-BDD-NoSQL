const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL || "mongodb://mongo:27017";
const client = new MongoClient(url);

let db;

async function connect() {
  await client.connect();
  db = client.db("gamehub");
  console.log("[mongo] connecté");
  return db;
}

// Les routes appellent getDb() une fois connect() passé au démarrage.
function getDb() {
  if (!db) throw new Error("MongoDB non connecté : appelle connect() d'abord");
  return db;
}

module.exports = { connect, getDb };
