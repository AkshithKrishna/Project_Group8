1.INSERT INTO Customers (name, email, phone_number)
      VALUES
        ('John Shaw', 'john@shaw.com', '123-456-7890'),
        ('Jane Smith', 'jane@smith.com', '987-654-3210'),
        ('Michael Johnson', 'michael@johnson.com', '555-555-5555'),
        ('Emily Brown', 'emily@brown.com', '111-222-3333'),
        ('David Lee', 'david@lee.com', '444-444-4444');
2.INSERT INTO Cars (make, model, year)
      VALUES
        ('Toyota', 'Camry', 2020),
        ('Honda', 'Civic', 2019),
        ('Ford', 'F-150', 2022),
        ('Chevrolet', 'Malibu', 2021),
        ('BMW', 'X5', 2023);
3.INSERT INTO Rentals (customer_id, car_id, rental_date, return_date)
      VALUES
        (1, 1, '2023-07-01', '2023-07-05'),
        (2, 3, '2023-07-02', '2023-07-07'),
        (3, 2, '2023-07-03', '2023-07-06'),
        (4, 4, '2023-07-04', '2023-07-08'),
        (5, 5, '2023-07-05', '2023-07-09');
4.INSERT INTO RentalRates (car_id, rental_rate_per_day)
      VALUES
        (1, 50.00),
        (2, 45.00),
        (3, 60.00),
        (4, 55.00),
        (5, 70.00);