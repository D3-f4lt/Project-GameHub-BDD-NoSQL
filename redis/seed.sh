#!/bin/sh

echo "========================================"
echo " Initialisation de Redis..."
echo "========================================"

# Attendre que Redis soit disponible
until redis-cli -h redis ping >/dev/null 2>&1
do
    echo "Redis n'est pas encore prêt... attente de 2 secondes."
    sleep 2
done

echo "Redis est prêt."

# Nettoyage
redis-cli -h redis DEL leaderboard:completion
redis-cli -h redis DEL recent_activity
redis-cli -h redis DEL user:1:status
redis-cli -h redis DEL user:2:status
redis-cli -h redis DEL user:3:status
redis-cli -h redis DEL user:4:status

# Classement
redis-cli -h redis ZADD leaderboard:completion 76 David
redis-cli -h redis ZADD leaderboard:completion 70 Lucas
redis-cli -h redis ZADD leaderboard:completion 83 Sarah
redis-cli -h redis ZADD leaderboard:completion 70 Emma

# Activité récente
redis-cli -h redis LPUSH recent_activity "David completed Cyberpunk 2077"
redis-cli -h redis LPUSH recent_activity "Lucas defeated a boss in Elden Ring"
redis-cli -h redis LPUSH recent_activity "Sarah completed Hades"
redis-cli -h redis LPUSH recent_activity "Emma added Rocket League"

# Statuts en ligne
redis-cli -h redis SET user:1:status online EX 300
redis-cli -h redis SET user:2:status online EX 300
redis-cli -h redis SET user:3:status offline EX 300
redis-cli -h redis SET user:4:status online EX 300

echo "========================================"
echo " Redis initialisé avec succès !"
echo "========================================"