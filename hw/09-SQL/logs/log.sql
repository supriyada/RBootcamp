SELECT * FROM employees

SELECT * FROM titles

SELECT count(*) FROM salaries

SELECT count(*) FROM dept_emp

SELECT * FROM departments

SELECT count(*) FROM dept_manager

SELECT *
FROM employees
WHERE EXTRACT(year FROM "hire_date") = 1986

SELECT t.title,round(avg(s.salary),2)
FROM employees e, salaries s, titles t
WHERE e.emp_no = s.emp_no
AND e.emp_title_id = t.title_id
GROUP BY t.title