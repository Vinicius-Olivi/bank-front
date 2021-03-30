import React, { useState } from "react";
import { NavLink as RRDNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Tooltip,
  NavbarText,
} from "reactstrap";
import styled from "styled-components";
import "../../assets/css/style.css";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { FaJediOrder } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggleToolTip = () => setTooltipOpen(!tooltipOpen);

  return (
    <header>
      <SNavbar color="dark" dark expand="md">
        <SNavbarBrand tag={RRDNavLink} to="/" id="logoHeader">
          <Tooltip
            placement="top"
            isOpen={tooltipOpen}
            autohide={false}
            target="logoHeader"
            toggle={toggleToolTip}
          >
            Back to Services
          </Tooltip>
          {/* <div className="logo"> */}
          <div className="logo_menu">
            <img src="/images/logo.svg" alt="" />
            {/* <LogoIcon /> */}
            {/* TechnoBank */}
          </div>
          {/* </div> */}
        </SNavbarBrand>
        <NavbarToggler ligth onClick={toggle} />
        <Container>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <SNavLink
                  exact
                  tag={RRDNavLink}
                  activeClassName="active"
                  to="/"
                >
                  Services
                </SNavLink>
              </NavItem>
              <NavItem>
                <SNavLink
                  exact
                  tag={RRDNavLink}
                  activeClassName="active"
                  to="/about"
                >
                  About
                </SNavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        <SNavbarText className="d-xs-none d-sm-block ">
          <h6>Think Different!</h6>
        </SNavbarText>
      </SNavbar>
    </header>
  );
};

export default Header;

const SNavbar = styled(Navbar)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  position: fixed;
  background: linear-gradient(90deg, #42145f 10%, #62145f 200%) !important;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 100;

  /* height: 80px;
  min-width: 100%;
  background: linear-gradient(90deg, #42145f 10%, #62145f 200%) !important;
  .logo_menu {
    margin-left: 65px;
    background-color: #fff;
    border-radius: 50%;
    display: none;
  }
  .container {
    margin-left: 160px;
    justify-content: space-around;
  } */
`;

const SNavbarText = styled(NavbarText)`
  color: #fff !important;
  margin-right: 100px !important;
`;

const SNavLink = styled(NavLink)`
  color: #ccc !important;
  font-size: 18px !important;
  font-family: "Montserrat";
  font-weight: 500;
  text-transform: uppercase;
  padding: 26px 0;

  &.active {
    color: #42145f !important;
    background-color: #fff !important;
  }

  @media (max-width: 929px) {
    display: flex;
    align-items: center;
    height: 80px;
  }
`;

const SNavbarBrand = styled(NavbarBrand)`
  color: #fff !important;
  .logo_menu {
    background-color: #fff;
    border-radius: 50%;
  }
`;

// const LogoIcon = styled(FaJediOrder)`
//   width: 60px;
//   height: 60px;
//   margin-left: 60px;
// `;
