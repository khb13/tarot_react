import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Menu from "./components/Menu";
import Editprofile from "./page/Editprofile";
import FindId from "./page/FindId";
import FindPass from "./page/FindPass";
import Home from "./page/Home";
import Login from "./page/Login";
import Profile from "./page/Profile";
import Qna from "./page/Qna";
import Ques from "./page/Ques";
import Result from "./page/Result";
import SignUp from "./page/SignUp";
import Today from "./page/Today";
import { view, setView } from "./components/Menu";
import Week from "./page/Week";
import Month from "./page/Month";

function App() {
  return (
    <Container
      onClick={({ view, setView }) => {
        if (view === true) {
          setView(view == !view);
        }
      }}
    >
      <Wrapper>
        <Menu />
        <MainPlate>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="today" element={<Today />} />
            <Route path="week" element={<Week />} />
            <Route path="month" element={<Month />} />
            <Route path="result" element={<Result />} />
            <Route path="/question" element={<Ques />} />
            <Route path="/qna" element={<Qna />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
            <Route path="findid" element={<FindId />} />
            <Route path="findpass" element={<FindPass />} />
            <Route path="editprofile" element={<Editprofile />} />
          </Routes>
        </MainPlate>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 60vh;
  height: 100vh;
  border: 1px solid #eee;

  margin: 0px auto;

  background-color: #e4b660;
`;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainPlate = styled.div`
  margin-top: 20px;
`;
export default App;
