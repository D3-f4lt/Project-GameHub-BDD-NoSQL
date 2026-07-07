const express = require("express");
const router = express.Router();
const { getSession } = require("../db/neo4j");

// GET /users/:id/friends -> liste des amis (relation FRIEND)
router.get("/users/:id/friends", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const session = getSession();
  try {
    const result = await session.run(
      `MATCH (u:User {id: $userId})-[:FRIEND]->(friend:User)
       RETURN friend.id AS id, friend.name AS name`,
      { userId }
    );
    res.json(result.records.map((r) => r.toObject()));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur Neo4j" });
  } finally {
    await session.close();
  }
});

// GET /users/:id/recommendations -> jeux possédés par les amis
// mais pas encore par l'utilisateur (logique de reco via le graphe)
router.get("/users/:id/recommendations", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const session = getSession();
  try {
    const result = await session.run(
      `MATCH (u:User {id: $userId})-[:FRIEND]->(friend:User)-[:OWNS]->(g:Game)
       WHERE NOT (u)-[:OWNS]->(g)
       RETURN DISTINCT g.id AS id, g.title AS title, count(friend) AS ownedByFriends
       ORDER BY ownedByFriends DESC`,
      { userId }
    );
    res.json(result.records.map((r) => r.toObject()));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur Neo4j" });
  } finally {
    await session.close();
  }
});

module.exports = router;
