import styled from "styled-components";

function FindPass() {
  return (
    <Container>
      <FindPassSheet>
        <FindPassTitle>비밀번호 찾기</FindPassTitle>
        <FindPassForm>
          <input placeholder="아이디"></input>
          <br />
          <input placeholder="이메일"></input>
          <FindPassButton>제출</FindPassButton>
        </FindPassForm>
      </FindPassSheet>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fef5d4;
  margin: auto;

  justify-content: center;
  align-items: center;

  width: 50vh;

  padding: 8px;
  margin-top: 15vh;
`;

const FindPassSheet = styled.div`
  width: 50vh;
  height: 20vh;
  color: black;

  margin: 20px 0px;
`;

const FindPassTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  margin: 0px auto;
  text-align: center;
`;

const FindPassForm = styled.form`
  margin: 20px;
  text-align: center;

  input {
    margin: 5px;
    width: 40vh;
    height: 3vh;
  }
`;

const FindPassButton = styled.div`
  margin: 20px auto;
  font-size: 0.8rem;
  border: 1px solid #ddd;
  background-color: #fff;
  width: 40px;

  text-align: center;
  cursor: pointer;
`;
export default FindPass;
