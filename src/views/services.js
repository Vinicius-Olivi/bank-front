import React, { useState, useEffect, useCallback } from "react";
import { getBankAllServices } from "../services/serv.service";
import { Row, Col, Container, Jumbotron } from "reactstrap";
import CardItem from "../components/services/card_item";
import styled from "styled-components";
import Loading from "../components/loading/index";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [hasError, setError] = useState(false);

  const getServices = useCallback(() => {
    setLoading(true);
    getBankAllServices()
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error alert");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getServices();
  }, [getServices]);

  //mount services
  const mappingServices = (services) =>
    services.map((item, i) => (
      <Col container md="6" xl="6" sm="12" xs="12" key={i} className="mb-4">
        <CardItem item={{ ...item, status: true }} />
      </Col>
    ));

  return (
    <BoxServices>
      {/* {hasError ? (
        <div>
          <p>⚠️ Ops...</p> <p>An error happened!</p>
        </div>
      ) : ( */}
      <div>
        <Jumbotron container-fluid>
          <div className="jumbo">
            <SContainer container-fluid>
              <div className="info_bg">
                <h1>TechnoBank</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum magni facere architecto fugiat iste at error laudantium
                  voluptatum consequatur deserunt eum voluptatem illo fugit,
                  quam nulla adipisci, in ipsa repudiandae! Iure sapiente
                  praesentium, soluta officiis vero ullam autem in facilis
                  cumque nam quas maxime assumenda illum, et porro eveniet.
                  Architecto.
                </p>
              </div>
              {/* hidden img */}
              <img
                className="d-none d-lg-block"
                src="/images/bg_md.svg"
                alt=""
              />
            </SContainer>
            <Row>{loading ? <Loading /> : mappingServices(services)} </Row>
          </div>
        </Jumbotron>
      </div>
    </BoxServices>
  );
};

export default Services;

const BoxServices = styled(Row)``;

const SContainer = styled(Container)`
  display: flex;
  margin-top: 25px;

  
  }
  .info_bg {
    text-align: center;
    width: 800px;
    p {
    }
    @media (max-width: 929px) {
    img {
      /* position: absolute; */
      margin: 100px;
    }
    &.info_bg {
    width: auto;
    text-align: justify;
    margin: 40px 0; //arrumando os cards deve arrumar aqui
    h1{
      text-align: center;
    }} 
  }
`;
