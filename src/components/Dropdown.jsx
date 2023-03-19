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
`;

const HoverTarot = styled.li`
  :hover {
    color: #aaa;
  }
`;

export default Dropdown;
