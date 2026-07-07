const express = require("express");
const router = express.Router();
const { getDb } = require("../db/mongo");

// GET /games/:id/achievements -> liste des achievements possibles pour un jeu
router.get("/games/:id/achievements", async (req, res) => {
  const gameId = parseInt(req.params.id, 10);
  try {
    const db = getDb();
    const doc = await db.collection("achievements").findOne({ gameId });
    res.json(doc || { gameId, achievements: [] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur MongoDB" });
  }
});

// GET /users/:id/achievements -> achievements débloqués par un user,
// tous jeux confondus
router.get("/users/:id/achievements", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const db = getDb();
    const unlocked = await db
      .collection("user_achievements")
      .find({ userId })
      .toArray();
    res.json(unlocked);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur MongoDB" });
  }
});

module.exports = router;
