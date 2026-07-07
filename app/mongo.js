const { createClient } = require("redis");

const client = createClient({
  url: process.env.REDIS_URL || "redis://redis:6379",
});

client.on("error", (err) => console.error("[redis] erreur", err));

async function connect() {
  await client.connect();
  console.log("[redis] connecté");
  return client;
}

module.exports = { client, connect };
