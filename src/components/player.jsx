import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  img,
}) {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={img}
          className="object-fit-cover"
          style={{ height: "350px", width: "300px" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Team: {team}</Card.Text>
          <Card.Text>Nationality: {nationality}</Card.Text>
          <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
          <Card.Text>Age: {age}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
