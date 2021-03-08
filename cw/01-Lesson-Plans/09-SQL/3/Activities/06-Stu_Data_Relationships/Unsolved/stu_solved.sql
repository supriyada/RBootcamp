CREATE TABLE * Create a `students` table that keeps track of the following:

CREATE TABLE students
( ID SERIAL PRIMARY KEY,
fname VARCHAR(20),
lname VARCHAR(20));

CREATE TABLE courses
(ID SERIAL PRIMARY KEY,
course_name VARCHAR(20));

drop table student_courses_junction

CREATE TABLE student_courses_junction
(stud_id INT NOT NULL,
Course_id INT NOT NULL,
Term VARCHAR(20),
FOREIGN KEY (stud_id) REFERENCES students(id),
FOREIGN KEY (Course_id) REFERENCES courses(id),
PRIMARY KEY(stud_id,Course_id));

INSERT INTO students (id, lname, fname)
VALUES
  (1, 'Skywalker', 'Luke'),
  (2, 'Skywalker', 'Leia'),
  (3, 'Solo', 'Han');
  
  INSERT INTO courses (id, course_name)
VALUES
  (3201, 'Data modeling'),
  (3202, 'Data visualization'),
  (12101, 'Force utilization');
  
  INSERT INTO student_courses_junction (stud_id, course_id, term)
VALUES
  (1,12101, 'Spring'),
  (1,3201, 'Fall'),
  (1,3202, 'Fall'),
  (2,12101, 'Fall'),
  (2,3202, 'Spring'),
  (3,3201, 'Spring'),
  (3,3202, 'Fall');
  
  SELECT * FROM student_courses_junction
  
  SELECT * FROM courses
  
  SELECT * FROM students
  
  SELECT s.fname,s.lname,sc.term,c.course_name
  FROM students s 
  LEFT JOIN student_courses_junction sc 
  ON s.id = sc.stud_id
  LEFT JOIN courses c
  ON sc.Course_id = c.id