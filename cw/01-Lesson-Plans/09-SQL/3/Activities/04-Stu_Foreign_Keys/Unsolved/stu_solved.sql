CREATE TABLE customer(
c_id SERIAL PRIMARY KEY,
first_name VARCHAR(20),
last_name VARCHAR(20));

INSERT INTO customer (first_name,last_name)VALUES
('Dan','Jov'),
('sam','john');

SELECT * FROM customer

CREATE TABLE email_addr(
c_id INT NOT NULL,
email VARCHAR(20),
	FOREIGN KEY (c_id) REFERENCES customer(c_id));
	
INSERT INTO email_addr VALUES(2,'eee@gmail.com')

CREATE TABLE phone(
c_id INT NOT NULL,
number INT,
FOREIGN KEY (c_id) REFERENCES customer(c_id));

INSERT INTO phone VALUES(4,98898888)

SELECT * FROM
customer c,
email_addr e,
phone p
WHERE c.c_id = e.c_id
AND c.c_id = p.c_id