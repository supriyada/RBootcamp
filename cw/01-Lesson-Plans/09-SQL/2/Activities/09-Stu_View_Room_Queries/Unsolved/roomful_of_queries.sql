SELECT film_id FROM film

SELECT film_id,count(film_id) AS "Number of copies"
FROM inventory
GROUP BY film_id

SELECT title FROM film WHERE film_id in(
SELECT film_id,count(film_id) AS "Number of copies"
FROM inventory
GROUP BY film_id
)

SELECT title, (SELECT film_id, count(film_id) FROM inventory GROUP BY film_id) AS "Number of copies"
FROM film
WHERE film.film_id = inventory.film_id

SELECT title,
(SELECT COUNT(inventory.film_id)
	FROM inventory
	WHERE film.film_id = inventory.film_id ) AS "Number of Copies"
FROM film;

