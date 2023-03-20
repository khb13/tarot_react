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
            <GiOrangeSlice size={30} color="white" />
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
            <PersonalTarot>타로 문의</PersonalTarot>
          </Link>
          <Link to="/qna">
            <QuesAns>기타·질문</QuesAns>
          </Link>
          <Link to="/login">
            <Login>로그인</Login>
          </Link>
        </WrapMenu>
      </NavWrapper>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid #fff;
  // 드롭다운이 아래 창을 밀지 않게 만들어야함.

  margin: 0px 10px;

  width: 60vh;
  height: 6vh;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: #f2ab39;
`;

const NavWrapper = styled.ul`
  display: flex;
  list-style: none;

  justify-content: space-around;
`;

const Logo = styled.li`
  margin-right: 20px;
`;

const WrapMenu = styled.div`
  padding-top: 5px;
  display: flex;

  font-size: 0.9rem;
  font-weight: bold;
  padding-bottom: 5px;
`;

const TarotButton = styled.div`
  margin-right: 20px;
`;

const OrangeTarot = styled.div`
  :hover {
    color: white;
  }
  cursor: pointer;
`;

const TarotDrop = styled.div``;

const PersonalTarot = styled.li`
  margin-right: 20px;
  :hover {
    color: white;
  }
`;

const QuesAns = styled.li`
  margin-right: 20px;
  :hover {
    color: white;
  }
`;

const Login = styled.li`
  :hover {
    color: white;
  }
`;

export default Menu;
