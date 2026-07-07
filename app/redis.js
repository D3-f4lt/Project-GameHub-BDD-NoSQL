const { Pool } = require("pg");

// Les valeurs par défaut correspondent au docker-compose.yml.
// "postgres" est le nom du service Docker, résolu automatiquement
// sur le réseau interne créé par docker compose.
const pool = new Pool({
  host: process.env.POSTGRES_HOST || "postgres",
  port: process.env.POSTGRES_PORT || 5432,
  user: process.env.POSTGRES_USER || "gamehub_user",
  password: process.env.POSTGRES_PASSWORD || "gamehub_password",
  database: process.env.POSTGRES_DB || "gamehub",
});

async function connect() {
  // Vérifie que la connexion fonctionne au démarrage, plutôt que
  // d'attendre la première requête pour découvrir un problème.
  await pool.query("SELECT 1");
  console.log("[postgres] connecté");
  return pool;
}

module.exports = { pool, connect };
