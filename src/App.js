import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Menu from "./components/Menu";
import Home from "./page/Home";
import Qna from "./page/Qna";
import Ques from "./page/Ques";
import Today from "./page/Today";

function App() {
  return (
    <Container>
      <Wrapper>
        <Menu />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="today" element={<Today />} />
          <Route path="/question" element={<Ques />} />
          <Route path="/qna" element={<Qna />} />
        </Routes>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */

  width: 60vh;
  height: 100vh;
  border: 1px solid #eee;

  margin: 0px auto;
`;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default App;
