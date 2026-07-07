MATCH (n)
DETACH DELETE n;

// Création des utilisateurs
CREATE
(:User {id:1, name:"David"}),
(:User {id:2, name:"Lucas"}),
(:User {id:3, name:"Sarah"}),
(:User {id:4, name:"Emma"});

// Création des jeux
CREATE
(:Game {id:1, title:"Cyberpunk 2077"}),
(:Game {id:2, title:"Hades"}),
(:Game {id:3, title:"Elden Ring"}),
(:Game {id:4, title:"Baldur's Gate 3"}),
(:Game {id:5, title:"The Witcher 3"}),
(:Game {id:6, title:"Stardew Valley"}),
(:Game {id:7, title:"Rocket League"}),
(:Game {id:8, title:"Hollow Knight"});

// Création des relations d'amitié
MATCH
(david:User {id:1}),
(lucas:User {id:2}),
(sarah:User {id:3}),
(emma:User {id:4})

CREATE
(david)-[:FRIEND]->(lucas),
(lucas)-[:FRIEND]->(david),

(david)-[:FRIEND]->(sarah),
(sarah)-[:FRIEND]->(david),

(lucas)-[:FRIEND]->(emma),
(emma)-[:FRIEND]->(lucas),

(sarah)-[:FRIEND]->(emma),
(emma)-[:FRIEND]->(sarah);

// Création des relations de possession
MATCH
(david:User {id:1}),
(lucas:User {id:2}),
(sarah:User {id:3}),
(emma:User {id:4}),

(cyberpunk:Game {id:1}),
(hades:Game {id:2}),
(elden:Game {id:3}),
(bg3:Game {id:4}),
(witcher:Game {id:5}),
(stardew:Game {id:6}),
(rocket:Game {id:7}),
(hollow:Game {id:8})

CREATE
(david)-[:OWNS]->(cyberpunk),
(david)-[:OWNS]->(hades),
(david)-[:OWNS]->(witcher),

(lucas)-[:OWNS]->(elden),
(lucas)-[:OWNS]->(cyberpunk),
(lucas)-[:OWNS]->(bg3),

(sarah)-[:OWNS]->(stardew),
(sarah)-[:OWNS]->(hades),
(sarah)-[:OWNS]->(hollow),

(emma)-[:OWNS]->(rocket),
(emma)-[:OWNS]->(elden),
(emma)-[:OWNS]->(witcher);