CREATE TABLE programming_languages(
id SERIAL PRIMARY KEY,
language varchar(20),
rating int);

INSERT into programming_languages(language,rating)
VALUES
('HTML',95),
('JS',99),
('JQUERY',98),
('MYSQL',70),
('MYSQL',70);

SELECT * FROM programming_languages;

SELECT * FROM programming_languages WHERE language ='MYSQL';

DELETE FROM programming_languages WHERE language ='MYSQL' and id = 4;

INSERT into programming_languages(language,rating)
VALUES
('PYTHON',90),
('JAVA',97),
('C++',80);

UPDATE programming_languages SET language ='JAVASCRIPT' WHERE id = 2;

UPDATE programming_languages SET rating = 90 WHERE language ='HTML';
mastered
ALTER TABLE programming_languages ADD mastered BOOLEAN DEFAULT TRUE;

SELECT * FROM programming_languages;

UPDATE programming_languages SET mastered = FALSE WHERE language ='HTML';