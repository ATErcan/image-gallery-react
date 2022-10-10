import Card from "react-bootstrap/Card";

function Picture({ name, imgSrc }) {
  return (
    <Card className="car-div mb-4 mt-4">
      <Card.Img variant="top" src={imgSrc} className="card-img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Picture;
