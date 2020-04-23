CREATE TABLE employees
(
  address VARCHAR(255) NOT NULL,
  department VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  firstname VARCHAR(25) NOT NULL,
  gender VARCHAR(15) NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  id SERIAL UNIQUE PRIMARY KEY,
  is_admin boolean NOT NULL DEFAULT FALSE,
  jobrole VARCHAR(255) NOT NULL,
  lastname VARCHAR(25) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_on TIMESTAMP
);

INSERT INTO employees
  (firstname, lastname, username, email, password, gender, jobrole, department, address, is_admin, created_on)
VALUES
  ('abdulrahman', 'yusuf', 'young-einstein', 'einstein@gmail.com', 'qeinstein', 'male', 'Accountant', 'Finance', '14th District, San Francisco', true, NOW())
RETURNING *;

CREATE TABLE articles
(
  article_id SERIAL UNIQUE PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body VARCHAR NOT NULL,
  author_id INT REFERENCES employees(id) NOT NULL,
  author VARCHAR(30) REFERENCES employees(username) NOT NULL,
  created_on TIMESTAMP NOT NULL
);


CREATE TABLE gifs
(
  gif_id SERIAL UNIQUE PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  image_url VARCHAR NOT NULL,
  author_id INT REFERENCES employees(id) NOT NULL,
  author VARCHAR(30) REFERENCES employees(username) NOT NULL,
  created_on TIMESTAMP NOT NULL
);




CREATE TABLE comments
(
  cid SERIAL UNIQUE PRIMARY KEY,
  comments VARCHAR NOT NULL,
  post_type VARCHAR(15) NOT NULL,
  article_id INT REFERENCES articles(article_id) NOT NULL,
  gif_id INT REFERENCES gifs(gif_id) NOT NULL,
  author_id INT REFERENCES employees(id) NOT NULL,
  created_on TIMESTAMP NOT NULL
);


