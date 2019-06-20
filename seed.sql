insert into Users (id, email, first_name, last_name, date_of_birth, gender, createdAt, updatedAt) values 
(1, "dan@gmail.com", "Dan", "W", "2019-01-01", "male", now(), now()),
(2, "dan@gmail.com", "Dan", "W", "2019-01-01", "male", now(), now()),
(3, "dan@gmail.com", "Dan", "W", "2019-01-01", "male", now(), now()),
(4, "dan@gmail.com", "Dan", "W", "2019-01-01", "male", now(), now()),
(5, "dan@gmail.com", "Dan", "W", "2019-01-01", "male", now(), now());

-- insert into Workout_templates (id, name, workout_structure, createdAt, updatedAt, userId) values 
-- (1, "4x4s", '{"length": "4"}', now(), now(), 1),
-- (2, "4x4s", '{"length": "4"}', now(), now(), 3),
-- (3, "4x4s", '{"length": "4"}', now(), now(), 4);

-- insert into Workout_instances (id, WorkoutTemplateID, workout_details, createdAt, updatedAt, userId) values 
-- (1, 1, '{"length": "3"}', now(), now(), 1),
-- (2, 1, '{"length": "3"}', now(), now(), 1),
-- (3, 2, '{"length": "3"}', now(), now(), 3)
