import { Link } from "react-router-dom";
import styled from "styled-components";

function Dropdown() {
  return (
    <Container>
      <ul>
        <HoverTarot>
          <Link to="/today">오늘의 타로</Link>
        </HoverTarot>
        <HoverTarot>이 주의 타로</HoverTarot>
        <HoverTarot>이 달의 타로</HoverTarot>
        <HoverTarot>올해의 타로</HoverTarot>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  background-color: #f2ab39;
  width: 14vh;
  padding: 2px;
`;

const HoverTarot = styled.li`
  :hover {
    color: white;
  }
  border-top: 1px solid white;
`;

export default Dropdown;
