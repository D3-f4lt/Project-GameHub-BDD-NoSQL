const express = require("express");
const router = express.Router();
const { pool } = require("../db/postgres");

// GET /users -> liste simple des utilisateurs (PostgreSQL)
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, username, email, created_at FROM users ORDER BY id"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur PostgreSQL" });
  }
});

// GET /users/:id/games -> jeux possédés par un user, avec plateforme,
// temps de jeu et progression (jointure sur 3 tables PostgreSQL)
router.get("/:id/games", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT g.id AS game_id, g.title, g.genre, p.name AS platform,
              ug.playtime_hours, ug.completion_percent, ug.added_at
       FROM user_games ug
       JOIN games g ON g.id = ug.game_id
       JOIN platforms p ON p.id = ug.platform_id
       WHERE ug.user_id = $1
       ORDER BY ug.added_at`,
      [id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur PostgreSQL" });
  }
});

module.exports = router;
