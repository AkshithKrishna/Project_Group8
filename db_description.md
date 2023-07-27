Description of Database:
1. Customers Table:
- Table Name: Customers
- Attributes: customer_id (Primary Key), name, email, phone_number
- Primary Key: customer_id
- Foreign Keys: None
- Foreign Key Constraints: None
- Functional Dependencies (FDs):
  - customer_id → name, email, phone_number
  - email → customer_id
  - phone_number → customer_id
- 3NF: Yes

Sample Data:
| customer_id | name      | email                   | phone_number    |
|-------------|-----------|--------------------------|-----------------|
| 1           | John Doe  | john.doe@example.com     | +1 123-456-7890 |
| 2           | Jane Smith| jane.smith@example.com   | +44 987-654-3210 |

2. Cars Table:
- Table Name: Cars
- Attributes: car_id (Primary Key), make, model, year
- Primary Key: car_id
- Foreign Keys: None
- Foreign Key Constraints: None
- Functional Dependencies (FDs):
  - car_id → make, model, year
  - make, model, year → car_id
- 3NF: Yes

Sample Data:
| car_id | make      | model   | year |
|--------|-----------|---------|------|
| 1      | Toyota    | Corolla | 2019 |
| 2      | Honda     | Civic   | 2020 |

3. Rentals Table:
- Table Name: Rentals
- Attributes: rental_id (Primary Key), customer_id (Foreign Key referencing Customers), car_id (Foreign Key referencing Cars), rental_date, return_date
- Primary Key: rental_id
- Foreign Keys:
  - customer_id (References Customers.customer_id with ON DELETE CASCADE)
  - car_id (References Cars.car_id with ON DELETE CASCADE)
- Foreign Key Constraints: ON DELETE CASCADE on both customer_id and car_id
- Functional Dependencies (FDs):
  - rental_id → customer_id, car_id, rental_date, return_date
  - customer_id → rental_id, car_id, rental_date, return_date
  - car_id → rental_id, customer_id, rental_date, return_date
  - rental_date → rental_id, customer_id, car_id, return_date
  - return_date → rental_id, customer_id, car_id, rental_date
- 3NF: Yes

Sample Data:
| rental_id | customer_id | car_id | rental_date | return_date  |
|-----------|-------------|--------|-------------|--------------|
| 1         | 1           | 1      | 2023-07-15  | 2023-07-18   |
| 2         | 2           | 2      | 2023-07-20  | 2023-07-25   |

4. RentalRates Table:
- Table Name: RentalRates
- Attributes: rate_id (Primary Key), car_id (Foreign Key referencing Cars), rental_rate_per_day
- Primary Key: rate_id
- Foreign Keys: car_id (References Cars.car_id with ON DELETE CASCADE)
- Foreign Key Constraints: ON DELETE CASCADE on car_id
- Functional Dependencies (FDs):
  - rate_id → car_id, rental_rate_per_day
  - car_id → rate_id, rental_rate_per_day
  - rental_rate_per_day → rate_id, car_id
- 3NF: Yes

Sample Data:
| rate_id | car_id | rental_rate_per_day |
|---------|--------|---------------------|
| 1       | 1      | 50.00               |
| 2       | 2      | 45.00               |

The database consists of four tables (Customers, Cars, Rentals, and RentalRates), each in 3NF. It has appropriate primary keys, foreign keys, and foreign key constraints to maintain data integrity. The functional dependencies are also listed for each table, indicating the relationships between attributes. The sample data provides a glimpse of the data stored in each table.