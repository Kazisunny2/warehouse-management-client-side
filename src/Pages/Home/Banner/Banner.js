import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel id="banner" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: "600px" }}
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>TV</h3>
          <p>
            TV is an electronics device that receives a visual and audio signal
            and plays it for the viewer. There is a debate over who is credited
            as being the inventor of the TV.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px" }}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Refrigerator</h3>
          <p>
            A refrigerator (fridge) is a commercial and home appliance
            consisting of a thermally insulated compartment and a heat pump
            (mechanical, electronic or chemical) that transfers heat from its
            inside to its external environment so that its inside is cooled to a
            temperature below the room temperature.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px" }}
          className="d-block w-100 "
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Laptop</h3>
          <p>
            A laptop or laptop computer, is a small, portable personal computer
            (PC) with a "clamshell" form factor, typically having a thin LCD or
            LED computer screen mounted on the inside of the upper lid of the
            clamshell and an alphanumeric keyboard on the inside of the lower
            lid.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
