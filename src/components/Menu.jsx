import styled from "styled-components";
import { GiOrangeSlice } from "react-icons/gi";
import { NavLink, Route } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState } from "react";

function Menu() {
  const [view, setView] = useState(false);

  const activeStyle = {
    color: "orange",
  };

  return (
    <Container
      onClick={() => {
        if (view === true) {
          setView(view == !view);
        }
      }}
    >
      <NavWrapper>
        <Logo>
          <NavLink to="/home" activeStyle={activeStyle}>
            <GiOrangeSlice
              size={30}
              color="white"
              onMouseOver={({ target }) => (target.style.color = "#FA520D")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </NavLink>
        </Logo>
        <WrapMenu>
          <TarotButton
            onClick={() => {
              setView(!view);
            }}
          >
            <OrangeTarot>오렌지 타로 {view ? "▲" : "▼"}</OrangeTarot>
            <TarotDrop>{view && <Dropdown />}</TarotDrop>
          </TarotButton>
          <NavLink to="/question" activeStyle={activeStyle}>
            <OrangeTarot>타로 문의</OrangeTarot>
          </NavLink>
          <NavLink to="/qna" activeStyle={activeStyle}>
            <OrangeTarot> 기타·질문</OrangeTarot>
          </NavLink>
          <NavLink to="/login" activeStyle={activeStyle}>
            <OrangeTarot>로그인</OrangeTarot>
          </NavLink>
        </WrapMenu>
      </NavWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 60vh;
  height: 6vh;

  margin: 0px 10px;

  background-color: #f2ab39;
  border-bottom: 1px solid #fff;
`;

const NavWrapper = styled.ul`
  display: flex;
  list-style: none;

  justify-content: space-around;
`;

const Logo = styled.div``;

const WrapMenu = styled.div`
  display: flex;

  padding: 5px 0;

  font-size: 0.9rem;
  font-weight: bold;
`;

const TarotButton = styled.div``;

const OrangeTarot = styled.div`
  margin-left: 20px;
  cursor: pointer;

  :hover {
    color: white;
  }
`;

const TarotDrop = styled.div``;

export default Menu;
