SELECT * FROM film;

SELECT COUNT(film_id) FROM film;

SELECT rating, count(film_id)
FROM film
GROUP BY rating;

SELECT rental_duration, MAX(rental_rate) AS "Max rental rate",
MIN(rental_rate) AS "Min rental rate",
round(AVG(rental_rate),2) AS "Average rental rate"
FROM film
GROUP BY rental_duration;

SELECT rating, rental_duration, MAX(rental_rate) AS "Max rental rate",
MIN(rental_rate) AS "Min rental rate",
round(AVG(rental_rate),2) AS "Average rental rate"
FROM film
GROUP BY rating, rental_duration;