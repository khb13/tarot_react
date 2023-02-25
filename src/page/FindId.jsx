import styled from "styled-components";

function FindId() {
  return (
    <Container>
      <FindIdSheet>
        <FindIdTitle>아이디 찾기</FindIdTitle>
        <FindIdForm>
          이름 <input placeholder="이름"></input>
          <br />
          이메일 <input placeholder="이메일"></input>
          <FindIdButton>제출</FindIdButton>
        </FindIdForm>
      </FindIdSheet>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eee;
  margin: auto;

  justify-content: center;
  align-items: center;

  width: 50vh;

  padding: 8px;
`;

const FindIdSheet = styled.div`
  width: 50vh;
  height: 20vh;

  background-color: #eee;
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
