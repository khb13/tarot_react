import styled from "styled-components";
import { GiOrangeSlice } from "react-icons/gi";

function Home() {
  return (
    <Container>
      <Logo>
        <GiOrangeSlice size={100} color="orange" />
      </Logo>
      <ExplainService>
        <p>서비스 설명</p>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          voluptatem quibusdam recusandae mollitia. Quam, perspiciatis impedit.
        </span>
      </ExplainService>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Logo = styled.div`
  margin-top: 35vh;
`;

const ExplainService = styled.div`
  width: 56vh;
  color: black;
  user-select: none;
  text-align: center;
  font-size: 0.8rem;
  p {
    font-size: 1rem;
    font-weight: bold;
  }

  padding: 10px;
`;
export default Home;
