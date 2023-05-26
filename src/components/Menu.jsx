import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
import { GiOrangeSlice } from "react-icons/gi";

const Menu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Container
      ref={dropdownRef}
      onClick={() => {
        if (dropdownOpen === true) {
          setDropdownOpen(dropdownOpen == !dropdownOpen);
        }
      }}
    >
      <NavWrapper>
        <Logo>
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
            })}
          >
            <GiOrangeSlice
              size={30}
              color="white"
              onMouseOver={({ target }) => (target.style.color = "#FA520D")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </NavLink>
        </Logo>
        <WrapMenu>
          <Button
            open={dropdownOpen}
            onClick={toggleDropdown}
            style={({ dropdownOpen }) => ({
              color: dropdownOpen ? "white" : "black",
            })}
          >
            오렌지 타로 {dropdownOpen ? "▲" : "▼"}
          </Button>
          {dropdownOpen && (
            <DropdownContent open={dropdownOpen}>
              <TarotDrop>
                <Dropdown />
              </TarotDrop>
            </DropdownContent>
          )}

          <NavLink
            to="/question"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
            })}
          >
            <Button2>타로 문의</Button2>
          </NavLink>
          <NavLink
            to="/qna"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
            })}
          >
            <Button2>기타·질문</Button2>
          </NavLink>
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
            })}
          >
            <Button2>로그인</Button2>
          </NavLink>
        </WrapMenu>
      </NavWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: space-around;

  width: 467px;
  height: 35px;

  margin: 0px 10px;

  background-color: #f2ab39;
  border-bottom: 1px solid #fff;
`;

const NavWrapper = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  margin: 0px 10px;
`;

const WrapMenu = styled.div`
  display: flex;

  padding: 5px 0;

  font-size: 0.9rem;
  font-weight: bold;
`;

const Button = styled.div`
  margin: 0px 10px;
  cursor: pointer;
  width: 100px;

  text-align: center;
  justify-content: center;

  color: ${({ open }) => (open ? "#ffffff" : "#000000")};

  :hover {
    color: white;
    transition: all 0.4s ease-out;
  }
`;

const Button2 = styled.div`
  margin: 0px 10px;
  cursor: pointer;
  width: 80px;

  text-align: center;
  justify-content: center;

  :hover {
    color: white;
    transition: all 0.4s ease-out;
  }
`;

const TarotDrop = styled.div``;

const DropdownContent = styled.div`
  position: absolute;
  top: 30%;
  display: ${({ open }) => (open ? "block" : "none")};
  // min-width: 160px;
  padding: 8px;
`;

export default Menu;
