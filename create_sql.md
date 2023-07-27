1.CREATE TABLE Customers (
        customer_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(100),
        phone_number VARCHAR(20)
      );
2. CREATE TABLE Cars (
        car_id INT AUTO_INCREMENT PRIMARY KEY,
        make VARCHAR(50),
        model VARCHAR(50),
        year INT
      );
3. CREATE TABLE Rentals (
        rental_id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        car_id INT,
        rental_date DATE,
        return_date DATE,
        FOREIGN KEY (customer_id) REFERENCES Customers(customer_id) ON DELETE CASCADE,
        FOREIGN KEY (car_id) REFERENCES Cars(car_id) ON DELETE CASCADE
      );
4. CREATE TABLE RentalRates (
        rate_id INT AUTO_INCREMENT PRIMARY KEY,
        car_id INT,
        rental_rate_per_day DECIMAL(8, 2),
        FOREIGN KEY (car_id) REFERENCES Cars(car_id) ON DELETE CASCADE
      );