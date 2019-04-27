DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS type CASCADE;
DROP TABLE IF EXISTS colour CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE type (
 id SERIAL PRIMARY KEY,
 type VARCHAR NOT NULL
);

CREATE TABLE colour (
  id SERIAL PRIMARY KEY,
  colour VARCHAR NOT NULL
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id)
  ON DELETE CASCADE,
  type_id INT REFERENCES type(id)
  ON DELETE CASCADE,
  colour_id INT REFERENCES colour(id)
  ON DELETE CASCADE,
  lost_location VARCHAR (5) NOT NULL,
  date VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  fedex_location VARCHAR NOT NULL,
  title VARCHAR NOT NULL
);

INSERT INTO users (name, email, password) VALUES ('Rich', 'rich@rich.rich', 'rich');

INSERT INTO type (type) VALUES ('clothing');
INSERT INTO type (type) VALUES ('accessories');
INSERT INTO type (type) VALUES ('electronics');
INSERT INTO type (type) VALUES ('toys');
INSERT INTO type (type) VALUES ('others');

INSERT INTO colour (colour) VALUES ('black');
INSERT INTO colour (colour) VALUES ('white');
INSERT INTO colour (colour) VALUES ('green');
INSERT INTO colour (colour) VALUES ('blue');
INSERT INTO colour (colour) VALUES ('red');
INSERT INTO colour (colour) VALUES ('yellow');
INSERT INTO colour (colour) VALUES ('other');

INSERT INTO items (user_id, type_id, colour_id, lost_location, date, status, fedex_location, title) VALUES (1, 1, 1, '12345', '12/31/19', 'not claimed', '12345 street ave', 'black scarf')
