import React from "react";
import image from "../../images/my photo.jpeg";

const About = () => {
  return (
    <div>
      <h2> About Me:</h2>
      <img style={{ width: "200px" }} src={image} alt="" />
      <h6>Name: Kazi Shaidul Islam Sunny</h6>
      <p>
        I am Kazi Shaidul Islam Sunny. I am studying in Germany. My Subject is
        Communication Systems and Networks. But I want to job in web
        developement field. I want a job after graduation. So, that's why I am
        doing this web development course. For getting my goal everyday I am
        giving atleast 4-5 hours to this course. I am self motivated person. I
        believe i can achieve my final goal.
      </p>
    </div>
  );
};

export default About;
