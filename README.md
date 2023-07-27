# Project_Group8

Member 1:Akshith Krishna Jonnalagadda
github id:#48556163

Member 2:Pravallika Popuri
Github id :#140572349

Youtube link: https://youtu.be/xo5nadPVDrY

General Description of the Database of this project:

Used sql software: Mysql

The provided database consists of four tables: Customers, Cars, Rentals, and RentalRates. Each table serves a specific purpose and maintains data related to customers, cars, rental transactions, and rental rates. Here's a brief overview of each table:

1. Customers Table:
- Stores information about customers who rent cars.
- Contains attributes like customer_id (primary key), name, email, and phone_number.
- The customer_id is a unique identifier for each customer, and email and phone_number are also unique for each customer.
- This table is in the third normal form (3NF) as it does not have any transitive dependencies.

2. Cars Table:
- Contains details about the cars available for rent.
- The table includes attributes such as car_id (primary key), make, model, and year.
- car_id is a unique identifier for each car, and the combination of make, model, and year uniquely identifies each car.
- It also meets the third normal form (3NF) requirements.

3. Rentals Table:
- Stores information about car rental transactions.
- Includes attributes like rental_id (primary key), customer_id (foreign key referencing Customers), car_id (foreign key referencing Cars), rental_date, and return_date.
- The rental_id is a unique identifier for each rental transaction, and customer_id and car_id are foreign keys, relating each rental to a specific customer and car, respectively.
- The table meets the third normal form (3NF) requirements.

4. RentalRates Table:
- Contains the rental rates per day for each car.
- Attributes include rate_id (primary key), car_id (foreign key referencing Cars), and rental_rate_per_day.
- The rate_id uniquely identifies each rental rate record, and car_id is a foreign key relating each rate to a specific car in the Cars table.
- The table is also in the third normal form (3NF).

Akshith contributed the UI/frontend for this Project and Pravallika contributed the backend/Crud of this project

Github commits list:
Akshith:
1. Initial commit : Initially started commiting with the skeleton of this project
    commit id :6d9a9986ad1ecc70d48ddc6ce14a4fad77f82fb2

2.In the second commit, we added the some basic elements of the ui
    commit id: 77ebb06da615351eefebdc3ec56bf83febb37079
    
3.In the third commit, we have added the handling the ui with respect to the CRUD operations.
    commit id:890fe34c4f9c599a1fd594cfba74c7c58f78fcab
    
4. In the fourth commit, we had made some corrections in the existing code and added method for returning the result.
       commit id:0ac28f47db91145d6c8e51e987f67ab8b10a1264

Pravallika:
1.Added the basic sql connection to the project.
    commit id:9b90b6a219309a1fd7d5797e4e9955e94d10e57a
    
2.Added the logic for the creating the tables and insertion of data into the tables.
    commit id:d32f8f57b206ebbd16a6fd13353b23dd234235b9
    
3.Added the Update and delete functionality of the data to the project.
    commit id: 2dabc1fe27efc51edc28fe74871f0445bc191584
    
4.Added the SQL Tables description files
    commit id:60c1685ff3edea121452e2ca64208f83e90adf98
