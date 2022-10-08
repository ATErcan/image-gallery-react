import Picture from "./components/Picture";
import data from "./helper/data";
import Col from "react-bootstrap/Col";

function Images() {
  return data.map((item, i) => (
    <Col key={i} md={4}>
      <Picture key={i} name={item.photographer} imgSrc={item.src.large} />
    </Col>
  ));
}

export default Images;
