import styled from "styled-components";

function FindId() {
  return (
    <Container>
      <FindIdSheet>
        <FindIdTitle>아이디 찾기</FindIdTitle>
        <FindIdForm>
          <input placeholder="이름" type="text"></input>
          <br />
          <input placeholder="이메일" type="email"></input>
          <FindIdButton>제출</FindIdButton>
        </FindIdForm>
      </FindIdSheet>
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

const FindIdSheet = styled.div`
  width: 50vh;
  height: 20vh;
  color: black;

  margin: 20px 0px;
`;

const FindIdTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  margin: 0px auto;
  text-align: center;
`;

const FindIdForm = styled.form`
  margin: 20px;
  text-align: center;

  input {
    margin: 5px;
    width: 40vh;
    height: 3vh;
  }
`;

const FindIdButton = styled.div`
  margin: 20px auto;
  font-size: 0.8rem;
  border: 1px solid #ddd;
  background-color: #fff;
  width: 40px;

  text-align: center;
  cursor: pointer;
`;
export default FindId;
