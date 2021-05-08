import React from "react";
import { Card } from "react-bootstrap";

function Resume () {
  return (
    <Card style={{ textAlign: "center" }} fluid>
      <Card.Title style={{ textAlign: "center" }}>Resume:</Card.Title>
      <a
        style={{ color: "gray", fontSize: 10 }}
        type="application/pdf"
        rel="noreferrer"
        target="_blank"
        href="https://pdfhost.io/v/4ExQmXzuh_resumeRDpdf.pdf"
      >
        <Card.Img
          className="resumeLink"
          style={{ width: 240, height: 300 }}
          src="https://i.imgur.com/66uKXXn.jpg"
          fluid
        />
        Click to Download
      </a>
    </Card>
  );
};

export default Resume;
