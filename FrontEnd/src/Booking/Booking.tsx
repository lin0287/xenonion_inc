import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import Select from 'react-select';
import {fetchDestinations} from "../Common Functions";

interface IOption {
  value: string;
  label: string;
}

function Booking() {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let destinations = undefined;
  let desinationDescription = undefined;

  useEffect(() => {
    fetchOptions();
  }, []);


  async function fetchOptions() {
    setIsLoading(true);
    destinations = await fetchDestinations(); // Await the result
    //console.log(destinations);
    let formattedOptions = destinations.map((item: { Name: string, Description: string, Picture: string }) => ({
      label: item.Name, // Assuming you want the name as label
      value: item.Name
    }));
    setOptions(formattedOptions); // Set the fetched options to state
    setIsLoading(false);
  }

  const [bookingDetails, setBookingDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '', // Date of Birth
    departureDate: '',
    returnDate: '',
    guests: '',
    destination: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookingDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSelectChange = (newValue: IOption | null) => {
    if (newValue) {
      setBookingDetails(prevDetails => ({
        ...prevDetails,
        destination: newValue.value
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Process booking details
    console.log('Booking Details:', bookingDetails);
    // Handle the submission (e.g., send data to a server)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="bookingFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={bookingDetails.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="bookingLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={bookingDetails.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="bookingEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={bookingDetails.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </Form.Group>

      <Form.Group controlId="bookingDOB">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="dob"
          value={bookingDetails.dob}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="bookingDestination">
        <Form.Label>Destination</Form.Label>
        <Select
          options={options}
          isLoading={isLoading}
          onChange={handleSelectChange}
          placeholder={isLoading ? "Loading..." : "Select an option"}
        />
      </Form.Group>

      <div>{desinationDescription}</div>

      <Row>
        <Col>
          <Form.Group controlId="bookingDepartureDate">
            <Form.Label>Departure Date</Form.Label>
            <Form.Control
              type="date"
              name="departureDate"
              value={bookingDetails.departureDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="bookingReturnDate">
            <Form.Label>Return Date</Form.Label>
            <Form.Control
              type="date"
              name="returnDate"
              value={bookingDetails.returnDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="bookingGuests">
        <Form.Label>Number of Guests</Form.Label>
        <Form.Control
          type="number"
          name="guests"
          value={bookingDetails.guests}
          onChange={handleChange}
          placeholder="Number of guests"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit Booking
      </Button>
    </Form>
  );
}

export default Booking;
