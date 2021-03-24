import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import styled from "styled-components";

const CardItem = (props) => {
  const { name, id, status } = props.item;

  const IsService = ({ isFalse }) => {
    if (isFalse) {
      return (
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Services
        </CardSubtitle>
      );
    } else {
      return <small>Other</small>;
    }
  };

  return (
    <SCard>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <IsService isFalse={true} />
        <Button
          tag={Link}
          to={`/details/${id}`}
          size="sm"
          color="info"
          href="#"
        >
          More information...
        </Button>
      </CardBody>
    </SCard>
  );
};
export default CardItem;

const SCard = styled(Card)`
  /* background-color: rgb(66, 20, 95, 0.1); */
  background-color: rgb(206, 59, 87, 0.1);
  color: #42145f;

  :hover {
    background-color: rgb(206, 59, 87, 0.3);
    /* background-color: rgb(66, 20, 95, 0.4); */
    transition: 0.4s;
  }
`;
