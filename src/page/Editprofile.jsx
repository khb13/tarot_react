import { Link } from "react-router-dom";
import styled from "styled-components";

function Editprofile() {
  return (
    <Container>
      <Profileback>
        <form>
          <ProImg>
            <EditProImg
              type="file"
              id="proimg"
              name="proimg"
              accept="image/*"
              onChange="loadFile(this)"
            ></EditProImg>
          </ProImg>
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
  width: 380px;

  margin: auto;
  padding: 8px;

  background-color: #fef5d4;

  box-sizing: border-box;
  border: 10px solid #f2ab39;
  border-radius: 2%;

  box-shadow: 0px 5px #7f6cdc;
`;

const Profileback = styled.div``;

const ProImg = styled.div`
  width: 130px;
  height: 130px;

  margin: 20px auto 10px;

  background-color: orange;

  border-radius: 50%;
`;

const EditProImg = styled.input`
  display: flex;
  justify-content: center;
  text-align: center;
  content-align: center;

  font-size: 0.5rem;
  width: 60px;
  height: 60px;

  margin: 20px auto;
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
