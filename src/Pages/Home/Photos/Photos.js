import React, { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import image1 from "../../../images/group-photos/1.jpg";
import image2 from "../../../images/group-photos/2.jpg";
import image3 from "../../../images/group-photos/3.jpg";
import image4 from "../../../images/group-photos/4.jpg";
import image5 from "../../../images/group-photos/5.jpg";
import image6 from "../../../images/group-photos/6.jpg";

const Photos = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex, e);
  };
  return (
    <>
      <h2>Some Electronics products</h2>
      <br />
      <CardGroup id="photos" activeIndex={index} onSelect={handleSelect}>
        <Card>
          <Card.Img variant="top" src={image1} />
        </Card>
        <Card>
          <Card.Img variant="top" src={image2} />
        </Card>
        <Card>
          <Card.Img variant="top" src={image3} />
        </Card>
        <Card>
          <Card.Img variant="top" src={image4} />
        </Card>
        <Card>
          <Card.Img variant="top" src={image5} />
        </Card>
        <Card>
          <Card.Img variant="top" src={image6} />
        </Card>
      </CardGroup>
    </>
  );
};

export default Photos;
