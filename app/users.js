const neo4j = require("neo4j-driver");

const driver = neo4j.driver(
  process.env.NEO4J_URL || "bolt://neo4j:7687",
  neo4j.auth.basic(
    process.env.NEO4J_USER || "neo4j",
    process.env.NEO4J_PASSWORD || "gamehub_password"
  )
);

async function connect() {
  await driver.verifyConnectivity();
  console.log("[neo4j] connecté");
  return driver;
}

// Chaque requête doit ouvrir puis fermer sa propre session :
// on centralise ça ici pour ne pas le répéter dans chaque route.
function getSession() {
  return driver.session();
}

module.exports = { connect, getSession };
