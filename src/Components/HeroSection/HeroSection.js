import { React, useState } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div >
      
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={"5000"}
          pause="hover"
          wrap="true"
        >
          <Carousel.Item>
            <img
              id="carouselImage"
              className="d-block w-100"
              src="/img/Welcome.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="caurousel-caption ">
              <h1>Welcome to Sunway Study Group</h1>
              <Button className="heroBtn" id="explore" variant="secondary" >
                Explore more
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/worldwide.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className="caurousel-caption">
              <h1>World Wide Admission</h1>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/language.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="caurousel-caption">
              <h1>Enrich Your Language Proficiency</h1>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/skills.jpg"
              alt="Forth slide"
            />
            <Carousel.Caption className="caurousel-caption">
              <h1>Develop Your Skills</h1>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/tuition.jpg"
              alt="Forth slide"
            />
            <Carousel.Caption className="caurousel-caption">
              <h1>Tutoring Z-Generation</h1>
              <Button className="heroBtn" id="explore" variant="secondary" >
                Hire A Tutor
              </Button>
              <Button className="heroBtn" id="apply" variant="secondary">
                Become A Tutor
              </Button>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Global.jpg"
              alt="Fifth slide"
            />
            <Carousel.Caption className="caurousel-caption ">
              <h1>Be Our Global Agent</h1>
              <Button className="heroBtn" id="explore" variant="secondary" >
                Explore more
              </Button>
              <Button className="heroBtn" id="apply" variant="secondary">
                Apply
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      
    </div>
  );
};

export default HeroSection;
