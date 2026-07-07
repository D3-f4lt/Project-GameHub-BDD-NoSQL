#!/bin/sh

echo "========================================"
echo " Initialisation de MongoDB..."
echo "========================================"

until mongosh --host mongo --eval "db.runCommand({ ping: 1 })" >/dev/null 2>&1
do
    echo "MongoDB n'est pas encore prêt... attente de 2 secondes."
    sleep 2
done

echo "MongoDB est prêt."

mongosh --host mongo gamehub /seed.js

echo "========================================"
echo " MongoDB initialisée avec succès !"
echo "========================================"