DROP DATABASE IF EXISTS noobvolution-db;

CREATE DATABASE noobvolution-db;

USE noobvolution;

CREATE TABLE coaches (
  coach_id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  game varchar(50) NOT NULL,
  created_at TIMESTAMP,
  PRIMARY KEY (coach_id)
);

CREATE TABLE players (
  player_id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  created_at TIMESTAMP,
  PRIMARY KEY (player_id)
);

CREATE TABLE bookings (
  id int NOT NULL AUTO_INCREMENT,
  timeslot int NOT NULL,
  coach_id int NOT NULL,
  player_id int NOT NULL,
  created_at TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (coach_id) REFERENCES coaches(coach_id),
  FOREIGN KEY (player_id) REFERENCES players(player_id)
);
