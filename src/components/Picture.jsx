import Card from "react-bootstrap/Card";

function Picture({ name, imgSrc }) {
  return (
    <Card className="uyuz">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Picture;
