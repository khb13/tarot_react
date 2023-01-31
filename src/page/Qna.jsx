import styled from "styled-components";

function Qna() {
  return (
    <Container>
      <InfoQna>
        <span>설명</span>
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
        voluptatem quibusdam recusandae mollitia. Quam, perspiciatis impedit.
      </InfoQna>
      <QnaForm>
        <QnaTitle placeholder="문의 제목"></QnaTitle>
        <QnaCustomer type="input" readOnly value={"유저 닉네임"}></QnaCustomer>
        <QnaText placeholder="문의 내용"></QnaText>
      </QnaForm>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ddd;
  width: 50vh;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const InfoQna = styled.div`
  width: 46vh;

  span {
    font-size: 0.8rem;
    font-weight: bold;
  }

  font-size: 0.7rem;
  padding: 5px;
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

export default Qna;
