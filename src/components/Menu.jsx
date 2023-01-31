import styled from "styled-components";
import { GiOrangeSlice } from "react-icons/gi";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Container>
      <NavWrapper>
        <Logo>
          <Link to="/home">
            <GiOrangeSlice size={30} color="orange" />
          </Link>
        </Logo>
        <WrapMenu>
          <Link to="/today">
            <CommonTarot>오늘의 타로</CommonTarot>
          </Link>
          <Link to="/question">
            <PersonalTarot>타로 문의</PersonalTarot>
          </Link>
          <Link to="/qna">
            <QuesAns>기타·질문</QuesAns>
          </Link>
        </WrapMenu>
      </NavWrapper>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid #555;

  margin: 10px;

  width: 60vh;

  display: flex;
  align-items: center;
  justify-content: space-around;
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

const CommonTarot = styled.li`
  margin-right: 20px;
  color: black;
  padding: 5px 0px;

  :hover {
    color: #aaa;
    font-size: 1rem;
  }
`;

const PersonalTarot = styled.li`
  margin-right: 20px;
  color: black;
  padding: 5px 0px;

  :hover {
    color: #fff;
    font-size: 1rem;

    background-color: #999;
  }
`;

const QuesAns = styled.li`
  color: black;
  padding: 5px 0px;

  :hover {
    color: #aaa;
    font-size: 1rem;
  }
`;

export default Menu;
