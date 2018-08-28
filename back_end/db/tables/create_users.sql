CREATE TABLE users (
id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
phone_number VARCHAR(255),
email VARCHAR(255),
profile_img VARCHAR(255),
role_id INT REFERENCES permissions(id) ON DELETE CASCADE
)