import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import styled from "styled-components";

const CardItem = (props) => {
  const { name, id, status, manager } = props.item;

  const IsService = ({ isFalse }) => {
    if (isFalse) {
      return (
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Manager: {manager}
        </CardSubtitle>
      );
    } else {
      return <small>Other</small>;
    }
  };

  return (
    <Container container-fluid>
      <SCard>
        <CardBody size="md">
          <CardTitle tag="h4">{name}</CardTitle>
          <IsService isFalse={status} />
          <Button tag={Link} to={`/details/${id}`} size="sm" color="info">
            More information...
          </Button>
        </CardBody>
      </SCard>
    </Container>
  );
};
export default CardItem;

const SCard = styled(Card)`
  /* background-color: rgb(66, 20, 95, 0.1); */
  background-color: rgb(206, 59, 87, 0.1);
  color: #42145f;
  margin-top: 20px;

  :hover {
    background-color: rgb(206, 59, 87, 0.3);
    /* background-color: rgb(66, 20, 95, 0.4); */
    transition: 0.4s;
  }
`;
