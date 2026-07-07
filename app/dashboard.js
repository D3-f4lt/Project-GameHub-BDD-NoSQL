const express = require("express");
const router = express.Router();
const { client } = require("../db/redis");

// GET /activity/recent -> les 10 dernières actions (LIST Redis)
router.get("/activity/recent", async (req, res) => {
  try {
    const items = await client.lRange("recent_activity", 0, 9);
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur Redis" });
  }
});

// GET /leaderboard -> classement par % de complétion (ZSET Redis),
// du meilleur score au moins bon
router.get("/leaderboard", async (req, res) => {
  try {
    const board = await client.zRangeWithScores(
      "leaderboard:completion",
      0,
      -1,
      { REV: true }
    );
    res.json(board);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur Redis" });
  }
});

// GET /users/:id/status -> en ligne / hors ligne (clé Redis avec TTL)
router.get("/users/:id/status", async (req, res) => {
  const { id } = req.params;
  try {
    const status = await client.get(`user:${id}:status`);
    res.json({ userId: Number(id), status: status || "unknown" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur Redis" });
  }
});

module.exports = router;
