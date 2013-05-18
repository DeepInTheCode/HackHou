CREATE TABLE fees
(
	id int,
	name varchar(255), 
	fee_type varchar(255),
	dept_id int,
	description varchar(1024),
	statutory_authority(255),
	fee_start_date datetime,
	fee_end_date datetime,
	notes varchar(1024),
	increase_applied boolean,
	admin_fee boolean,
	increase_date datetime,
	increase_index varchar(1024),
	dept_assignment_cat_id	int,
	dept_assignment_criteria_id int,
	decimal_notes varchar(255),
)

CREATE TABLE department_assignment_catagories
(
	id int,
	name varchar(255),
)

CREATE TABLE department_assignment_criteria
(
	id int,
	name varchar(255),
	description varchar(255),
)

CREATE TABLE departments
(
	id int,
	name varchar(255),
	description varchar(255),

)

INSERT INTO department_assignment_catagories 1, 'Permit', null
INSERT INTO department_assignment_catagories 2, 'License', null
INSERT INTO department_assignment_catagories 3, 'Inspection', null
INSERT INTO department_assignment_catagories 4, 'Plan Review', null
INSERT INTO department_assignment_catagories 5, 'Support/Service', null
INSERT INTO department_assignment_catagories 6, 'Other', null


INSERT INTO department_assignment_criteria 1, 'Escalator/Ordinance', null
INSERT INTO department_assignment_criteria 2, 'Contract', null
INSERT INTO department_assignment_criteria 3, 'State Law', null
INSERT INTO department_assignment_criteria 4, 'Mkt. Driven', null
INSERT INTO department_assignment_criteria 5, 'Other Escalator', null
INSERT INTO department_assignment_criteria 6, 'Other', null