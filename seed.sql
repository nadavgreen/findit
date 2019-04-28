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
  title VARCHAR NOT NULL,
  img_url TEXT NOT NULL,
  claim_id INT,
  id_image TEXT
);

INSERT INTO users (name, email, password) VALUES ('Rich', 'rich@rich.rich', 'rich');

INSERT INTO type (type) VALUES ('Clothing');
INSERT INTO type (type) VALUES ('Accessories');
INSERT INTO type (type) VALUES ('Electronics');
INSERT INTO type (type) VALUES ('Toys');
INSERT INTO type (type) VALUES ('Others');

INSERT INTO colour (colour) VALUES ('Black');
INSERT INTO colour (colour) VALUES ('White');
INSERT INTO colour (colour) VALUES ('Green');
INSERT INTO colour (colour) VALUES ('Blue');
INSERT INTO colour (colour) VALUES ('Red');
INSERT INTO colour (colour) VALUES ('Yellow');
INSERT INTO colour (colour) VALUES ('Other');

INSERT INTO items (user_id, type_id, colour_id, lost_location, date, status, fedex_location, title, img_url) VALUES (1, 1, 3, '12345', '31/12/19', 'Not Claimed', '12345 Street Ave', 'Green Scarf', 'https://tcprd-tdcdn.netdna-ssl.com/green-acrylic-green-london-tartan-scarf-240375-105-1600-0.jpg?id=SC240375')
