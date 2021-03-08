CREATE TABLE cities(
city VARCHAR(30),
c_state VARCHAR(30),
population int);

INSERT INTO cities(city,c_state,population) VALUES
('Alameda','California',79177),
('Mesa','Arizona',496401),
('Boerne','Texas',16056),
('Anaheim','California',352497),
('Tucson','Arizona',535677),
('Garland','Texas',238002);

--Query the entire table
SELECT * FROM cities;

--Select all city names
SELECT city FROM cities;

--cities only in Arizona
SELECT city FROM cities WHERE state ='Arizona';

--select cities with population < 100,000
SELECT * FROM cities WHERE population < 100000;

--select cities with population < 100,000 and in california
SELECT * FROM cities WHERE population < 100000 AND state = 'California';
