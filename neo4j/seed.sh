#!/bin/sh

echo "Attente de Neo4j..."

until cypher-shell \
-a bolt://neo4j:7687 \
-u neo4j \
-p gamehub_password \
"RETURN 1;" > /dev/null 2>&1
do
  sleep 5
done

echo "Neo4j disponible"

cypher-shell \
-a bolt://neo4j:7687 \
-u neo4j \
-p gamehub_password \
< /seed.cypher

echo "Neo4j initialisé"