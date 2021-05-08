import React from "react";
import { Image } from "react-bootstrap";
import Images from "../../images.json";
import "./style.css";

function HomeCard() {
  return (
    <div className="aboutMe">
      <Image
        className="aboutMeImage"
        height="150"
        width="150"
        variant="top"
        src={Images[0].img}
        roundedCircle
        fluid
      />
      <p>
        Full-Stack web developer with a strong background in business and
        operations management that allows for innovative problem solving in a
        way that makes sense for clients and the bottom line. Recently earned a
        certificate in full stack development from Rutgers University, with
        skills in JavaScript, CSS, databases, React.js and much more - all of
        which can be applied for a responsive web app build. My goal is to
        conduct myself in a professional manner that flies in the face of the
        status quo for programmers and engage with clients to such a degree that
        the sales process continues throughout the project to ensure clients are
        retained easily. I have built out projects that vary from front and
        backend api databases sites to cryptocurrency market tracking, all of
        which I took the lead for development ideas on and helped manage from
        start to completion. My management successes coupled with my desire to
        learn and improve means that what I bring to the table is an opportunity
        to succeed in the short term and then thrive in the long term, you will
        know that you have a capable leader in your ranks who is ready to lead
        whenever needed.
      </p>
    </div>
  );
}

export default HomeCard;
