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
        <QnaTitle placeholder="문의 제목"></QnaTitle>
        <QnaCustomer type="input" readOnly value={"유저 닉네임"}></QnaCustomer>
        <QnaText placeholder="문의 내용"></QnaText>
        <QnaSubmit>제출</QnaSubmit>
      </QnaForm>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fef5d4;
  width: 50vh;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 2%;
`;

const InfoQna = styled.div`
  width: 46vh;

  span {
    font-size: 0.8rem;
    font-weight: bold;
  }

  font-size: 0.7rem;
  padding: 8px;
`;

const QnaForm = styled.form`
  width: 50vh;
  padding: 10px;
`;

const QnaTitle = styled.input`
  border: none;
  max-width: 40vh;
  width: 35vh;
  margin-right: 10px;
  padding: 3px 5px;
`;

const QnaCustomer = styled.input`
  border: none;
  max-width: 10vh;
  color: #777;

  padding: 3px 5px;
`;

const QnaText = styled.textarea`
  border: none;

  width: 47vh;
  height: 50vh;
  margin-top: 10px;

  font-size: 0.8rem;

  padding: 5px;
`;

const QnaSubmit = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 15%;

  font-size: 0.8rem;
  text-align: center;

  width: 5vh;

  :hover {
    cursor: pointer;
  }
`;

export default Qna;
