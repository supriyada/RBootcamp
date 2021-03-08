SELECT * FROM city WHERE city 
in ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes')

SELECT * FROM address WHERE city_id in(
SELECT city_id FROM city WHERE city 
in ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes')
)

SELECT first_name,last_name FROM customer WHERE address_id in(
	SELECT address_id FROM address WHERE city_id in(
		SELECT city_id FROM city WHERE city like ('Q%')
	)
)

SELECT cu.first_name, cu.last_name, a.address ,c.city
FROM city c, address a, customer cu
WHERE c.city like 'Q%'
AND c.city_id = a.city_id
AND cu.address_id = a.address_id


CREATE VIEW cust_view AS
SELECT cu.first_name, cu.last_name, a.address ,c.city
FROM city c, address a, customer cu
WHERE c.city like 'Q%'
AND c.city_id = a.city_id
AND cu.address_id = a.address_id

SELECT * FROM cust_view