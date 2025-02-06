--add new table
ALTER TABLE employee
ADD nationality varchar(200);
--insert data 
INSERT INTO public.employee(
	id, company_id, staff_id, full_name, date_of_birth, gender, phone_number, email, nationality)
	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);

--filter data that want to see . and it has relasionship with anther people too 
SELECT e.full_name, e.gender, e.date_of_birth, c.company_name, c.contact_email, c.phone_number,
    CASE
        WHEN AGE(e.date_of_birth) < INTERVAL '18 years' THEN 'Under Age'
        WHEN AGE(e.date_of_birth) > INTERVAL '60 years' THEN 'Over Age'
        ELSE 'Within Age Range'
    END AS age_group
FROM employee e
JOIN company c ON e.company_id = c.id;