import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [rental_date, setRentalDate] = useState("");
  const [return_date, setReturnDate] = useState("");
  const [newPhone, setNewPhone] = useState(0);
  const [customerList, setCustomerList] = useState([]);

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [rental_rate_per_day, setRentalRates] = useState(0);
  const [newYear, setNewYear] = useState(0);
  const [carList, setCarList] = useState([]);


  const [currentPage, setCurrentPage] = useState("customers");

  // Function to render the content of the current page
  const renderPageContent = () => {
    switch (currentPage) {
      case "cars":
        return (
          <div className="App">
            <div className="information">
              <div>
                <label>Make:</label>
                <input
                  type="text"
                  onChange={(event) => {
                    setMake(event.target.value);
                  }}
                />
                <label>Model:</label>
                <input
                  type="text"
                  onChange={(event) => {
                    setModel(event.target.value);
                  }}
                />
                <label>year:</label>
                <input
                  type="text"
                  onChange={(event) => {
                    setYear(event.target.value);
                  }}
                />
                <label>Rate:</label>
                <input
                  type="number"
                  onChange={(event) => {
                    setRentalRates(event.target.value);
                  }}
                />
              </div>
              <div className="addShow">
                <button onClick={addCar}>Add Car</button>
                <button onClick={getCars}>Show Cars</button>
              </div>
            </div>

            <div className="employees">
              <table>
                <thead>
                  <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Rental Rate</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {carList.map((val, key) => (
                    <tr key={key}>
                      <td>{val.make}</td>
                      <td>{val.model}</td>
                      <td>{val.year}</td>
                      <td>{val.rental_rate_per_day}</td>
                      <td>
                        <input
                          type="text"
                          placeholder="New Year..."
                          onChange={(event) => {
                            setNewYear(event.target.value);
                          }}
                        />
                        <button className="tableButton" onClick={() => updateCarYear(val.car_id)}>Update</button>
                        <button className="tableButton" onClick={() => deleteCar(val.car_id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
