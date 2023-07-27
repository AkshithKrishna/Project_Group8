1.Create
INSERT INTO Cars (make, model, year)
      VALUES
        ('Toyota', 'Camry', 2020),
        ('Honda', 'Civic', 2019),
        ('Ford', 'F-150', 2022),
        ('Chevrolet', 'Malibu', 2021),
        ('BMW', 'X5', 2023);
2.Read/retrieve Query to fetch customers with their rental dates and return dates
SELECT c.*, r.rental_date, r.return_date
      FROM Customers c
      LEFT JOIN Rentals r ON c.customer_id = r.customer_id;
3.Update
UPDATE customers SET phone_number = 123-456-7890 WHERE customer_id = 1
4.Delete
DELETE FROM customers WHERE customer_id = 1