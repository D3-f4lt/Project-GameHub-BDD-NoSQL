db = db.getSiblingDB("gamehub");

db.achievements.drop();

db.achievements.insertMany([
  {
    gameId: 1,
    gameTitle: "Cyberpunk 2077",
    achievements: [
      {
        code: "cp_first_contract",
        name: "Premier contrat",
        description: "Terminer sa première mission",
        points: 10,
        rarity: "common"
      },
      {
        code: "cp_night_city",
        name: "Bienvenue à Night City",
        description: "Découvrir la ville principale",
        points: 20,
        rarity: "common"
      },
      {
        code: "cp_act1",
        name: "Finir l'acte 1",
        description: "Terminer le premier acte de l'histoire",
        points: 40,
        rarity: "rare"
      },
      {
        code: "cp_legend",
        name: "Légende de Night City",
        description: "Terminer l'histoire principale",
        points: 100,
        rarity: "legendary"
      }
    ]
  },
  {
    gameId: 2,
    gameTitle: "Hades",
    achievements: [
      {
        code: "hades_escape",
        name: "Première évasion",
        description: "Réussir à s'échapper une première fois",
        points: 50,
        rarity: "rare"
      },
      {
        code: "hades_gods",
        name: "Faveur des dieux",
        description: "Obtenir une bénédiction de chaque dieu",
        points: 30,
        rarity: "common"
      },
      {
        code: "hades_complete",
        name: "Maître des enfers",
        description: "Terminer le jeu à 100 %",
        points: 100,
        rarity: "legendary"
      }
    ]
  },
  {
    gameId: 3,
    gameTitle: "Elden Ring",
    achievements: [
      {
        code: "er_first_boss",
        name: "Premier boss",
        description: "Vaincre son premier boss majeur",
        points: 20,
        rarity: "common"
      },
      {
        code: "er_lord",
        name: "Seigneur d'Elden",
        description: "Terminer l'aventure principale",
        points: 100,
        rarity: "legendary"
      },
      {
        code: "er_explorer",
        name: "Explorateur",
        description: "Découvrir plusieurs régions majeures",
        points: 40,
        rarity: "rare"
      }
    ]
  },
  {
    gameId: 4,
    gameTitle: "Baldur's Gate 3",
    achievements: [
      {
        code: "bg3_escape",
        name: "Évasion du nautiloïde",
        description: "Terminer l'introduction",
        points: 10,
        rarity: "common"
      },
      {
        code: "bg3_party",
        name: "Compagnons réunis",
        description: "Recruter plusieurs compagnons",
        points: 30,
        rarity: "common"
      },
      {
        code: "bg3_ending",
        name: "Fin de campagne",
        description: "Terminer l'histoire principale",
        points: 100,
        rarity: "legendary"
      }
    ]
  }
]);

db.user_achievements.drop();

db.user_achievements.insertMany([
  {
    userId: 1,
    gameId: 1,
    unlocked: [
      {
        code: "cp_first_contract",
        unlockedAt: "2025-03-01"
      },
      {
        code: "cp_night_city",
        unlockedAt: "2025-03-05"
      }
    ]
  },
  {
    userId: 1,
    gameId: 2,
    unlocked: [
      {
        code: "hades_escape",
        unlockedAt: "2025-03-10"
      },
      {
        code: "hades_gods",
        unlockedAt: "2025-03-12"
      }
    ]
  },
  {
    userId: 2,
    gameId: 3,
    unlocked: [
      {
        code: "er_first_boss",
        unlockedAt: "2025-03-07"
      },
      {
        code: "er_explorer",
        unlockedAt: "2025-03-09"
      }
    ]
  },
  {
    userId: 3,
    gameId: 2,
    unlocked: [
      {
        code: "hades_escape",
        unlockedAt: "2025-03-11"
      },
      {
        code: "hades_gods",
        unlockedAt: "2025-03-13"
      },
      {
        code: "hades_complete",
        unlockedAt: "2025-03-20"
      }
    ]
  }
]);