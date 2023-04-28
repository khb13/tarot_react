import { Link } from "react-router-dom";
import styled from "styled-components";

function Dropdown() {
  return (
    <Container>
      <ul>
        <HoverTarot>
          <Link to="/today">오늘의 타로</Link>
        </HoverTarot>
        <HoverTarot>
          <Link to="/week">이 주의 타로</Link>
        </HoverTarot>
        <HoverTarot>
          <Link to="/month">이 달의 타로</Link>
        </HoverTarot>
        <HoverTarot>
          <Link to="/year">올해의 타로</Link>
        </HoverTarot>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  background-color: #f2ab39;
  width: 14vh;
  padding: 2px;
  margin: 13px 10px 10px 8px;
`;

const HoverTarot = styled.li`
  :hover {
    color: white;
    background-color: #db802a;
    transition: all 0.5s ease-out;
  }
  border-top: 1px solid white;
  padding: 3px;
  text-align: center;
`;

export default Dropdown;
