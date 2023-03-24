import styled from "styled-components";
import { GiOrangeSlice } from "react-icons/gi";

function Home() {
  return (
    <Container>
      <Logo>
        <GiOrangeSlice size={100} color="#ffffff" />
      </Logo>
      <ExplainService>
        <p>오렌지 타로</p>
        <span>
          간단하게, 클릭 몇 번으로 체험해볼 수 있는 온라인 타로.
          <br />
          오늘의 타로부터 기타·질문까지도 편하게 볼 수 있습니다.
        </span>
      </ExplainService>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const Logo = styled.div`
  margin-top: 35vh;
`;

const ExplainService = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 0.8rem;

  user-select: none;

  p {
    padding-bottom: 10px;
    font-size: 1rem;
    font-weight: bold;
  }
`;
export default Home;
