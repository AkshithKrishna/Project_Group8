const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Function to execute a SQL query
function executeQuery(query) {
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "rentals",
});

async function createTables() {
  try {
    // Connect to the database
    await db.connect();

    // Query to create the Customers table
    await executeQuery(`
      CREATE TABLE Customers (
        customer_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(100),
        phone_number VARCHAR(20)
      );
    `);

    // Query to create the Cars table
    await executeQuery(`
      CREATE TABLE Cars (
        car_id INT AUTO_INCREMENT PRIMARY KEY,
        make VARCHAR(50),
        model VARCHAR(50),
        year INT
      );
    `);

    // Query to create the Rentals table
    await executeQuery(`
      CREATE TABLE Rentals (
        rental_id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        car_id INT,
        rental_date DATE,
        return_date DATE,
        FOREIGN KEY (customer_id) REFERENCES Customers(customer_id) ON DELETE CASCADE,
        FOREIGN KEY (car_id) REFERENCES Cars(car_id) ON DELETE CASCADE
      );
    `);

    // Query to create the RentalRates table
    await executeQuery(`
      CREATE TABLE RentalRates (
        rate_id INT AUTO_INCREMENT PRIMARY KEY,
        car_id INT,
        rental_rate_per_day DECIMAL(8, 2),
        FOREIGN KEY (car_id) REFERENCES Cars(car_id) ON DELETE CASCADE
      );
    `);

    console.log('Tables created successfully.');

    // Inserting data into Customers table
    await executeQuery(`
      INSERT INTO Customers (name, email, phone_number)
      VALUES
        ('John Shaw', 'john@shaw.com', '123-456-7890'),
        ('Jane Smith', 'jane@smith.com', '987-654-3210'),
        ('Michael Johnson', 'michael@johnson.com', '555-555-5555'),
        ('Emily Brown', 'emily@brown.com', '111-222-3333'),
        ('David Lee', 'david@lee.com', '444-444-4444');
    `);

    // Inserting data into Cars table
    await executeQuery(`
      INSERT INTO Cars (make, model, year)
      VALUES
        ('Toyota', 'Camry', 2020),
        ('Honda', 'Civic', 2019),
        ('Ford', 'F-150', 2022),
        ('Chevrolet', 'Malibu', 2021),
        ('BMW', 'X5', 2023);
    `);

    // Inserting data into Rentals table
    await executeQuery(`
      INSERT INTO Rentals (customer_id, car_id, rental_date, return_date)
      VALUES
        (1, 1, '2023-07-01', '2023-07-05'),
        (2, 3, '2023-07-02', '2023-07-07'),
        (3, 2, '2023-07-03', '2023-07-06'),
        (4, 4, '2023-07-04', '2023-07-08'),
        (5, 5, '2023-07-05', '2023-07-09');
    `);

    // Inserting data into RentalRates table
    await executeQuery(`
      INSERT INTO RentalRates (car_id, rental_rate_per_day)
      VALUES
        (1, 50.00),
        (2, 45.00),
        (3, 60.00),
        (4, 55.00),
        (5, 70.00);
    `);

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    // Close the database connection
    //db.end();
  }
}

// Call the function to create the tables and insert data
 //createTables();
