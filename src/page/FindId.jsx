import styled from "styled-components";

function FindId() {
  return (
    <Container>
      <FindIdSheet>
        <FindIdTitle>아이디 찾기</FindIdTitle>
        <FindIdForm>
          <input placeholder="이름" type="text"></input>
          <input placeholder="이메일" type="email"></input>
          <FindIdButton>제출</FindIdButton>
        </FindIdForm>
      </FindIdSheet>
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

const FindIdSheet = styled.div`
  margin: 20px 0;
`;

const FindIdTitle = styled.div`
  text-align: center;

  font-size: 1.2rem;
  font-weight: bold;
`;

const FindIdForm = styled.form`
  margin: 20px;

  input {
    width: 40vh;

    margin: 5px;
    padding: 2px;

    border: 1px solid #999;
  }
`;

const FindIdButton = styled.div`
  text-align: center;
  width: 40px;
  margin: 20px auto;

  font-size: 0.8rem;

  border: 1px solid #999;
  border-radius: 20%;

  background-color: #fff;

  cursor: pointer;
`;
export default FindId;
