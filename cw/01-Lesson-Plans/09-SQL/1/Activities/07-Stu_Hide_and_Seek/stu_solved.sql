CREATE TABLE wordassociation(
	author INT,
	word1 VARCHAR,
	word2 VARCHAR,
	source VARCHAR
);

SELECT * FROM wordassociation

SELECT * FROM wordassociation WHERE word1 = 'stone'

SELECT * FROM wordassociation WHERE author > 1 AND author < 10

SELECT * FROM wordassociation WHERE word1 = 'pie' OR word2 = 'pie'

SELECT * FROM wordassociation WHERE 
source = 'BC' 
AND author >= 333 
AND author <= 335
