import styled from "styled-components";
import { GiOrangeSlice } from "react-icons/gi";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState } from "react";

function Menu() {
  const [view, setView] = useState(false);

  return (
    <Container>
      <NavWrapper>
        <Logo>
          <Link to="/home">
            <GiOrangeSlice
              size={30}
              color="white"
              onMouseOver={({ target }) => (target.style.color = "#FA520D")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </Link>
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
          <Link to="/question">
            <OrangeTarot>타로 문의</OrangeTarot>
          </Link>
          <Link to="/qna">
            <OrangeTarot> 기타·질문</OrangeTarot>
          </Link>
          <Link to="/login">
            <OrangeTarot>로그인</OrangeTarot>
          </Link>
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
