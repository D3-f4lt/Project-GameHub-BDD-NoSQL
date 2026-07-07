DROP TABLE IF EXISTS user_games;
DROP TABLE IF EXISTS platforms;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATE NOT NULL
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    publisher VARCHAR(100) NOT NULL,
    release_date DATE NOT NULL
);

CREATE TABLE platforms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE user_games (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    game_id INTEGER NOT NULL,
    platform_id INTEGER NOT NULL,
    playtime_hours INTEGER NOT NULL DEFAULT 0,
    completion_percent INTEGER NOT NULL DEFAULT 0,
    added_at DATE NOT NULL,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_game
        FOREIGN KEY (game_id)
        REFERENCES games(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_platform
        FOREIGN KEY (platform_id)
        REFERENCES platforms(id)
        ON DELETE CASCADE,

    CONSTRAINT completion_range
        CHECK (completion_percent >= 0 AND completion_percent <= 100)
);

INSERT INTO users (username, email, created_at) VALUES
('David', 'david@gamehub.fr', '2025-01-10'),
('Lucas', 'lucas@gamehub.fr', '2025-01-12'),
('Sarah', 'sarah@gamehub.fr', '2025-01-15'),
('Emma', 'emma@gamehub.fr', '2025-01-20');

INSERT INTO games (title, genre, publisher, release_date) VALUES
('Cyberpunk 2077', 'RPG', 'CD Projekt', '2020-12-10'),
('Hades', 'Roguelike', 'Supergiant Games', '2020-09-17'),
('Elden Ring', 'Action RPG', 'Bandai Namco', '2022-02-25'),
('Baldur''s Gate 3', 'RPG', 'Larian Studios', '2023-08-03'),
('The Witcher 3', 'RPG', 'CD Projekt', '2015-05-19'),
('Stardew Valley', 'Simulation', 'ConcernedApe', '2016-02-26'),
('Rocket League', 'Sport', 'Psyonix', '2015-07-07'),
('Hollow Knight', 'Metroidvania', 'Team Cherry', '2017-02-24');

INSERT INTO platforms (name) VALUES
('Steam'),
('Epic Games'),
('GOG'),
('PlayStation'),
('Xbox');

INSERT INTO user_games (
    user_id,
    game_id,
    platform_id,
    playtime_hours,
    completion_percent,
    added_at
) VALUES
(1, 1, 1, 42, 55, '2025-02-01'),
(1, 2, 2, 35, 80, '2025-02-05'),
(1, 5, 3, 120, 95, '2025-02-10'),

(2, 3, 1, 90, 75, '2025-02-03'),
(2, 1, 1, 60, 65, '2025-02-08'),
(2, 4, 1, 110, 70, '2025-02-12'),

(3, 6, 1, 200, 100, '2025-02-02'),
(3, 2, 2, 50, 90, '2025-02-06'),
(3, 8, 3, 40, 60, '2025-02-13'),

(4, 7, 2, 25, 40, '2025-02-04'),
(4, 3, 4, 85, 72, '2025-02-09'),
(4, 5, 3, 130, 98, '2025-02-14');