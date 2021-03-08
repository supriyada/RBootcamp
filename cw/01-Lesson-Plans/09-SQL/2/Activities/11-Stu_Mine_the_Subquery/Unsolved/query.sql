SELECT * FROM film WHERE title = 'ALTER VICTORY'

SELECT * FROM actor

SELECT first_name,last_name FROM actor WHERE actor_id IN (
	SELECT actor_id FROM film_actor WHERE film_id IN
	(
		SELECT film_id FROM film WHERE title = 'ALTER VICTORY'
	)
)

SELECT * FROM staff WHERE first_name = 'Jon' AND last_name = 'Stephens'

SELECT title FROM FILM WHERE film_id IN(
	SELECT film_id FROM inventory WHERE inventory_id IN (
		SELECT inventory_id FROM rental WHERE staff_id IN
		(
			SELECT staff_id FROM staff WHERE first_name = 'Jon' AND last_name = 'Stephens'
		)
	)
)