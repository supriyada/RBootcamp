SELECT * FROM film

SELECT * FROM store

--1. What is the average cost to rent a film in the stores?
SELECT round(AVG(rental_rate),2) as "Average cost"
FROM film;

--2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? What is the most expensive?
SELECT rating, AVG(rental_rate) AS "Rental cost"
FROM film
GROUP BY rating

SELECT * FROM(
SELECT rating, AVG(rental_rate) AS "Rental_cost"
FROM film
GROUP BY rating) ABC


--3. How much would it cost to replace all films in the database?
SELECT SUM(replacement_cost) FROM film

--4. How much would it cost to replace all films in each ratings category?
SELECT rating,SUM(replacement_cost) FROM film
GROUP BY rating

--5. How long is the longest movie in the database? How long is the shortest movie?
SELECT MAX(length) as longest_movie,
MIN(length) as shortest_movie 
FROM film
