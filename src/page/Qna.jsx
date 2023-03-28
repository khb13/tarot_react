import styled from "styled-components";

function Qna() {
  return (
    <Container>
      <InfoQna>
        <span>문의하기</span>
        <br />
        기타 문의 사항에 대해서는 해당 페이지로 제출해주십시오.
      </InfoQna>
      <QnaForm>
        <QnaTitle placeholder="문의 제목" type="text" required></QnaTitle>
        <QnaCustomer
          type="text"
          readOnly
          value={"유저 닉네임"}
          required
          //유저 닉네임은 자동으로 받아올 수 있도록 함.
        ></QnaCustomer>
        <QnaText placeholder="문의 내용" type="textarea" required></QnaText>
        <QnaSubmit type="submit">제출</QnaSubmit>
      </QnaForm>
    </Container>
  );
}

const Container = styled.div`
  width: 50vh;
  margin: auto;

  background-color: #fef5d4;

  border-radius: 2%;

  box-shadow: 5px 5px #7f6cdc;
`;

const InfoQna = styled.div`
  width: 48vh;

  padding: 8px;
  margin: 0px auto;

  font-size: 0.7rem;

  span {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const QnaForm = styled.form`
  width: 50vh;
  padding: 10px;
`;

const QnaTitle = styled.input`
  max-width: 40vh;
  width: 35vh;

  margin-right: 10px;
  padding: 3px 5px;

  border: 1px solid #999;
  border-radius: 5%;
`;

const QnaCustomer = styled.input`
  max-width: 10vh;
  padding: 3px 5px;

  border: 1px solid #999;
  border-radius: 10%;

  color: #777;
`;

const QnaText = styled.textarea`
  width: 47vh;
  height: 50vh;

  margin-top: 10px;
  padding: 5px;

  border: 1px solid #999;
  border-radius: 2%;

  font-size: 0.8rem;
`;

const QnaSubmit = styled.button`
  text-align: center;

  width: 5vh;

  background-color: white;

  border: 1px solid #999;
  border-radius: 15%;

  font-size: 0.8rem;

  :hover {
    cursor: pointer;
  }
`;

export default Qna;
