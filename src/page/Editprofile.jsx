import { Link } from "react-router-dom";
import styled from "styled-components";

function Editprofile() {
  return (
    <Container>
      <Profileback>
        <form>
          <ProImg></ProImg>
          <ProName
            placeholder="닉네임"
            type="text"
            name="NicName"
            maxLength={10}
            required
            autoFocus
          ></ProName>
          <ProTitle>
            <ProLabel>아이디</ProLabel>
            <ProUserInput type="text" name="id" required></ProUserInput>
          </ProTitle>
          <ProTitle>
            <ProLabel>이메일</ProLabel>
            <ProUserInput type="email" name="email"></ProUserInput>
          </ProTitle>
          <ProTitle>
            <ProLabel>비밀번호</ProLabel>
            <ProUserInput type="password" name="pass"></ProUserInput>
            <ProLabel>비밀번호 확인</ProLabel>
            <ProUserInput type="password" name="copass"></ProUserInput>
          </ProTitle>

          <ReProfile type="submit">
            <Link to="/profile">수정 완료</Link>
          </ReProfile>
        </form>
      </Profileback>
    </Container>
  );
}

const Container = styled.div`
  width: 60vh;

  margin: auto;
  padding: 8px;

  background-color: #fef5d4;

  border-radius: 2%;

  box-shadow: 0px 5px #7f6cdc;
`;

const Profileback = styled.div``;

const ProImg = styled.div`
  width: 20vh;
  height: 20vh;

  margin: 20px auto;

  background-color: orange;

  border-radius: 50%;
`;

const ProName = styled.input`
  width: 100px;

  margin: 40px 0px 20px 10px;

  font-weight: bold;
`;

const ProTitle = styled.div``;

const ProLabel = styled.div`
  max-width: 100px;

  padding: 2px 10px;

  font-size: 0.7rem;
`;

const ProUserInput = styled.input`
  max-width: 250px;
  width: 250px;

  margin: 10px;
  padding: 2px 10px;

  border-bottom: 1px solid #333;

  font-size: 0.7rem;
`;

const ReProfile = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;

  width: 80px;

  font-size: 0.8rem;
  background-color: #fff;

  padding: 2px;
  margin: 30px auto;

  border: 2px solid #ddd;
  border-radius: 15%;

  cursor: pointer;
`;
export default Editprofile;
