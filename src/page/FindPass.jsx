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
  width: 50vh;

  margin: 15vh auto;
  padding: 8px;

  background-color: #fef5d4;

  border-radius: 2%;
`;

const FindPassSheet = styled.div`
  margin: 20px 0;
`;

const FindPassTitle = styled.div`
  text-align: center;

  font-size: 1.2rem;
  font-weight: bold;
`;

const FindPassForm = styled.form`
  margin: 20px;

  input {
    width: 40vh;

    margin: 5px;
    padding: 2px;

    border: 1px solid #999;
  }
`;

const FindPassButton = styled.div`
  text-align: center;
  width: 40px;
  margin: 20px auto;

  font-size: 0.8rem;

  border: 1px solid #999;
  border-radius: 20%;

  background-color: #fff;

  cursor: pointer;
`;
export default FindPass;
