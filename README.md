# GameHub – Projet Bases de Données NoSQL

## Présentation

GameHub est une application de démonstration développée dans le cadre du projet de Bases de Données NoSQL.

L'objectif est de mettre en œuvre une architecture de **persistance polyglotte**, où plusieurs systèmes de gestion de bases de données sont utilisés simultanément, chacun étant choisi en fonction du type de données qu'il gère le mieux.

Le projet s'appuie sur quatre bases de données :

* PostgreSQL
* MongoDB
* Redis
* Neo4j

L'ensemble est entièrement déployé via Docker Compose.

---

# Architecture

Présenter rapidement le rôle de chaque base.

| Base       | Utilisation                                          |
| ---------- | ---------------------------------------------------- |
| PostgreSQL | Utilisateurs, jeux, plateformes, bibliothèque        |
| MongoDB    | Achievements et progression                          |
| Redis      | Classements, activités récentes, statuts temporaires |
| Neo4j      | Relations d'amitié et recommandations                |

---

# Arborescence

```text
GameHub-nosql/
│
├── App/
│
├── postgres/
│   └── init.sql
│
├── mongo/
│   ├── seed.js
│   └── seed.sh
│
├── redis/
│   └── seed.sh
│
├── neo4j/
│   ├── seed.cypher
│   └── seed.sh
│
├── docker-compose.yml
│
└── README.md
```

---

# Technologies utilisées

* Docker
* Docker Compose
* PostgreSQL 17
* MongoDB 8
* Redis 8
* Neo4j 2025
* Node.js (Application)

---

# Prérequis

* Docker Desktop installé
* Docker Compose

Aucune installation des bases n'est nécessaire.

---

# Installation

Cloner le dépôt :

```bash
git clone https://github.com/D3-f4lt/Project-GameHub-BDD-NoSQL.git
```

Entrer dans le projet :

```bash
cd Project-GameHub-BDD-NoSQL
```

Lancer l'ensemble :

```bash
docker compose up --build
```

---

# Fonctionnement

Au premier lancement :

* PostgreSQL est initialisé automatiquement.
* MongoDB est peuplée automatiquement.
* Redis est rempli automatiquement.
* Neo4j est initialisé automatiquement.
* L'application démarre.

Aucune commande supplémentaire n'est nécessaire.

---

# Vérification

## PostgreSQL

```bash
docker exec -it gamehub_postgres psql -U gamehub_user -d gamehub
```

Puis :

```sql
SELECT * FROM users;
```

---

## MongoDB

```bash
docker exec -it gamehub_mongo mongosh
```

Puis :

```javascript
use gamehub

db.achievements.find().pretty()
```

---

## Redis

```bash
docker exec -it gamehub_redis redis-cli
```

Puis :

```redis
ZREVRANGE leaderboard:completion 0 -1 WITHSCORES
```

---

## Neo4j

```bash
docker exec -it gamehub_neo4j cypher-shell -u neo4j -p gamehub_password
```

Puis :

```cypher
MATCH (u:User)
RETURN count(u);
```

---

# Données de démonstration

Le projet charge automatiquement :

* 4 utilisateurs
* plusieurs jeux
* plusieurs plateformes
* achievements
* classement Redis
* activités récentes
* relations d'amitié
* recommandations

---

# Répartition des données

| Donnée          | Base       |
| --------------- | ---------- |
| Utilisateurs    | PostgreSQL |
| Jeux            | PostgreSQL |
| Plateformes     | PostgreSQL |
| Bibliothèque    | PostgreSQL |
| Achievements    | MongoDB    |
| Progression     | MongoDB    |
| Classement      | Redis      |
| Activités       | Redis      |
| Statut en ligne | Redis      |
| Amis            | Neo4j      |
| Recommandations | Neo4j      |

---

# Réinitialiser le projet

Pour repartir d'une base vide :

```bash
docker compose down -v
```

Puis :

```bash
docker compose up --build
```

Les quatre bases seront recréées et repeuplées automatiquement.

---

# Auteurs

* David Hacher
* Eliott Madec

---

# Licence

Projet réalisé dans le cadre du module Bases de Données NoSQL.

---

