-- Drop table if exists
DROP TABLE IF EXISTS firepower;

-- Create new table to import data
CREATE TABLE firepower (
	country VARCHAR,
	ISO3 VARCHAR,
	rank INT,
	TotalPopulation INT,
	ManpowerAvailable INT,
	TotalMilitaryPersonnel INT,
	ActivePersonnel INT,
	ReservePersonnel INT,
	TotalAircraftStrength INT,
	FighterAircraft INT,
	AttackAircraft INT,
	TotalHelicopterStrength INT,
	AttackHelicopters INT
);

-- Import data from GlobalFirePower.csv
-- View the table to ensure all data has been imported correctly
SELECT * FROM firepower; -- 133 -- 112

SELECT count(*) FROM firepower
WHERE
ReservePersonnel = 0 -- 21

DELETE FROM firepower
WHERE
ReservePersonnel = 0

SELECT * FROM firepower
WHERE
FighterAircraft = 1 -- Sri Lanka

SELECT count(*) FROM firepower
WHERE
FighterAircraft = 0 -- 30

UPDATE firepower SET FighterAircraft = FighterAircraft + 1
WHERE
FighterAircraft = 0

SELECT count(*) FROM firepower
WHERE
FighterAircraft = 1
AND country != 'Sri Lanka'

UPDATE firepower SET
TotalAircraftStrength = TotalAircraftStrength+1
WHERE
FighterAircraft = 1
AND country != 'Sri Lanka'

SELECT AVG(TotalMilitaryPersonnel) AS Avg_MilitaryPersonnel,
AVG(TotalAircraftStrength) AS Avg_AircraftStrength,
AVG(TotalHelicopterStrength) AS Avg_HelicopterStrength,
AVG(TotalPopulation) AS Avg_Population
FROM firepower

SELECT count(*) FROM firepower

ALTER TABLE firepower
ADD COLUMN id SERIAL PRIMARY KEY

INSERT INTO firepower(Country, TotalPopulation, TotalMilitaryPersonnel, TotalAircraftStrength, TotalHelicopterStrength)
VALUES ('GlobalLand', 60069024, 524358, 457, 183);

