import React, {useState} from 'react';
import {Carousel, Button, Image} from 'react-bootstrap';
import './Home.css'; // Importing the CSS file
import { useNavigate } from 'react-router-dom';

function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  const handleBookNow = () => {
    navigate("/booking");
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            src="exotic_world_1.png"
          />
          <Carousel.Caption>
            <h3>Explore Distant Worlds</h3>
            <p>Discover the unknown reaches of space with our exclusive tours.</p>
            <Button variant="primary">Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="exotic_world_2.png" // Replace with your image path
          />
          <Carousel.Caption>
            <h3>Experience Interstellar Travel</h3>
            <p>Embark on a journey beyond the stars.</p>
            <Button variant="primary" onClick={handleBookNow}>Book Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="exotic_world_3.png" // Replace with your image path
          />
          <Carousel.Caption>
            <h3>Create Unforgettable Memories</h3>
            <p>Embark on a journey beyond the stars.</p>
            <Button variant="primary" onClick={handleBookNow}>Book Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
