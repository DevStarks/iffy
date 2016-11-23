# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
first_name      | string    | not null  
last_name       | string    | not null  
email           | string    |   
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## rentals
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
address         | string    | not null
landlord        | string    |
management      | string    |
rating          | integer   | not null, default: false

## rental_photos
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
rental_id       | integer   | not null, foreign key
image_content_type | string    | not null
image_updated_at   | string    | not null
image_file_size    | string    | not null

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
points          | integer   | not null, default: 0
author_id       | integer   | not null, foreign key, indexed
rental_id       | integer   | not null, foreign key, indexed


## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
review_id       | integer   | not null, foreign key, indexed
author_id       | integer   | not null, foreign key, indexed
