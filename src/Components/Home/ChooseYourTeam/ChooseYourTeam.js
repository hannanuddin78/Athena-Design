import React from "react";
import { Container, Row } from "react-bootstrap";
import "./ChooseYourTeam.css";
import TeamDetails from "./teamDetails/TeamDetails";

const teamDetails = [
  {
    id: 1,
    price: 199,
    for: "For Basic",
    li1: "Homepage",
    li2: "No Inner Page",
    li3: "Asset file",
    li4: "Source file",
    li5: "Free Stock Photos",
    li6: "10 Days Free Support",
    li7: "24/7 Support",
  },
  {
    id: 2,
    price: 399,
    for: "For Basic",
    li1: "Homepage",
    li2: "4 Inner Pages",
    li3: "Asset file",
    li4: "Source file",
    li5: "Free Stock Photos",
    li6: "20 Days Free Support",
    li7: "24/7 Support",
  },
  {
    id: 3,
    price: 599,
    for: "For Basic",
    li1: "Homepage",
    li2: "No Inner Page",
    li3: "Asset file",
    li4: "Source file",
    li5: "Free Stock Photos",
    li6: "30 Days Free Support",
    li7: "24/7 Support",
  },
];

const ChooseYourTeam = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">CHOOSE YOUR DEDICATED TEAM</h1>
      <Row>
        {teamDetails.map((team) => (
          <TeamDetails team={team} key={team.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ChooseYourTeam;
