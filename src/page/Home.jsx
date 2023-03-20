import styled from "styled-components";
import { GiOrangeSlice } from "react-icons/gi";

function Home() {
  return (
    <Container>
      <Logo>
        <GiOrangeSlice size={100} color="white" />
      </Logo>
      <ExplainService>
        <p>오렌지 타로</p>
        <span>
          간단하게, 클릭 몇 번으로 체험해볼 수 있는 온라인 타로.<br />
          오늘의 타로부터 기타·질문까지도 편하게 볼 수 있습니다.
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
