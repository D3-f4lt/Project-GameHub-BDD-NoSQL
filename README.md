# Project-GameHub-BDD-NoSQL
Pour notre porjet d'étude en Base de Données NoSQL, nous avons opté pour GameHub.

L’objectif de l’application est de permettre à un utilisateur de consulter les jeux qu’il possède, quelle que soit leur plateforme d’origine simulée : Steam, Epic Games, GOG, PlayStation ou Xbox. L’utilisateur peut également visualiser sa progression dans chaque jeu, consulter les achievements disponibles, voir son activité récente, connaître le statut de ses amis et obtenir des recommandations de jeux.

Le projet ne se connecte à aucune API externe réelle comme Steam ou Epic Games. Toutes les données sont simulées et chargées automatiquement grâce à des scripts d’initialisation. Ce choix permet de se concentrer sur l’objectif principal du projet : la mise en place et l’exploitation de plusieurs bases de données complémentaires.

GameHub utilise une architecture de persistance polyglotte composée de quatre bases :

PostgreSQL pour les données structurées ;
MongoDB pour les achievements ;
Redis pour les données rapides ou temporaires ;
Neo4j pour les relations sociales et les recommandations.

L’application reste volontairement simple. Son rôle n’est pas de proposer une interface complète, mais de démontrer que les quatre bases sont correctement utilisées, alimentées et interrogées.
