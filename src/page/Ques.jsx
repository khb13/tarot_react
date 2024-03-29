import styled from "styled-components";

function Ques() {
  return (
    <Container>
      <InfoTarot>
        <span>타로 문의 사용법</span>
        <br />
        자세한 타로 문의는 타로 종류와 내용을 따로 기재하여 보내주시면 확인 후
        프로필로 등록 되어있는 메일로 결과를 보내드립니다.
      </InfoTarot>
      <QuesForm name="Tarot_Ques" method="post">
        <InputData>
          <TypeSelect name="type">
            <option label="총운" />
            <option label="연애운" />
            <option label="학업운" />
            <option label="사업운" />
            <option label="재물운" />
            <option label="기타" />
          </TypeSelect>
          <LocalDate type="datetime-local" />
          <UserName
            type="text"
            readOnly
            value={"유저 닉네임"}
            required
          ></UserName>
        </InputData>
        <QuesTitle type="text" placeholder="제목" required />
        <QuesInput type="textarea" placeholder="내용 입력" required />
        <SubButton type="submit">제출</SubButton>
      </QuesForm>
    </Container>
  );
}

const Container = styled.div`
  width: 50vh;

  margin: auto;
  padding: 8px;

  background-color: #fef5d4;

  border-radius: 2%;

  box-shadow: 5px 5px #7f6cdc;
`;

const InfoTarot = styled.div`
  width: 380px;

  margin: 0px auto;

  font-size: 0.7rem;

  span {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const QuesForm = styled.form`
  width: 400px;

  padding: 5px;
  margin: 0px auto;
`;

const InputData = styled.div`
  max-height: 22px;
`;

const TypeSelect = styled.select`
  border: none;
  padding-right: 5px;
  margin-right: 5px;

  border: 1px solid #999;
  border-radius: 5%;
`;

const LocalDate = styled.input`
  border: none;
  max-width: 162px;
  margin-right: 5px;

  border: 1px solid #999;
  border-radius: 5%;
`;

const UserName = styled.input`
  width: 118px;
  border: none;

  color: #aaa;
  font-size: 0.8rem;

  border: 1px solid #999;
  border-radius: 5%;
`;

const QuesTitle = styled.input`
  width: 358px;
  border: none;
  margin-top: 5px;
  padding: 3px;

  border: 1px solid #999;
  border-radius: 5%;
`;

const QuesInput = styled.textarea`
  width: 358px;
  height: 370px;
  border: none;
  overflow: auto;

  padding: 5px;
  margin-top: 5px;

  border: 1px solid #999;
  border-radius: 2%;

  clear: clear;
`;

const SubButton = styled.button`
  background-color: white;
  border: 1px solid #999;
  border-radius: 15%;

  font-size: 0.8rem;
  text-align: center;

  width: 40px;

  :hover {
    cursor: pointer;
  }
`;
export default Ques;
