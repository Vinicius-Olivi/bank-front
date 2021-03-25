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
import { FaJediOrder } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggleToolTip = () => setTooltipOpen(!tooltipOpen);

  return (
    <header>
      <SNavbar color="light" light expand="md">
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
        <NavbarToggler onClick={toggle} />
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
        <SNavbarText>
          <h6>Think Different!</h6>
        </SNavbarText>
      </SNavbar>
    </header>
  );
};

export default Header;

const SNavbar = styled(Navbar)`
  height: 80px;
  min-width: 100%;
  background-color: #42145f !important;
  .logo_menu {
    margin-left: 65px;
    background-color: #fff;
    border-radius: 50%;
  }
  .container {
    margin-left: 60px;
    justify-content: space-around;
  }
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
  padding: 29px 0;

  &.active {
    color: #42145f !important;
    background-color: #fff;
    border-radius: 5px;
  }
`;

const SNavbarBrand = styled(NavbarBrand)`
  color: #fff !important;
`;

// const LogoIcon = styled(FaJediOrder)`
//   width: 60px;
//   height: 60px;
//   margin-left: 60px;
// `;
