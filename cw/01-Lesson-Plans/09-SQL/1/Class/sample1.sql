--Creates a table
CREATE TABLE people (
	full_name VARCHAR(30) NOT NULL,
	has_pet BOOLEAN DEFAULT FALSE,
	pet_type VARCHAR(10) NOT NULL,
	pet_name VARCHAR(30),
	pet_age INT
);

--check if you can query
SELECT * FROM people;

--add some rows
INSERT INTO people (full_name,has_pet,pet_type,pet_name,pet_age) 
VALUES
('name2',true,'dog','pet2',5),
('name3',FALSE,'cat',NULL,3),
('name4',true,'dog','pet4',5);

--Where condition
SELECT * FROM people
WHERE pet_age < 4
AND (
pet_type = 'cat');