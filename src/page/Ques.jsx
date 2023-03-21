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
          <UserName type="input" readOnly value={"유저 닉네임"}></UserName>
        </InputData>
        <QuesTitle type="input" placeholder="제목" />
        <QuesInput type="input" placeholder="내용 입력" />
        <SubButton>제출</SubButton>
      </QuesForm>
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
  border-radius: 2%;
`;

const InfoTarot = styled.div`
  width: 46vh;

  span {
    font-size: 0.8rem;
    font-weight: bold;
  }

  font-size: 0.7rem;
`;

const QuesForm = styled.form`
  padding: 5px;

  width: 50vh;
  justify-content: center;
  align-items: center;

  margin: 0px auto;
`;

const InputData = styled.div`
  max-height: 3vh;
`;

const TypeSelect = styled.select`
  border: none;
  padding-right: 5px;
  margin-right: 5px;
`;

const LocalDate = styled.input`
  border: none;
  max-width: 20vh;
  margin-right: 5px;
`;

const UserName = styled.input`
  width: 15vh;
  border: none;

  color: #aaa;
  font-size: 0.8rem;
`;

const QuesTitle = styled.input`
  width: 46vh;
  border: none;
  margin-top: 5px;
  padding: 3px;
`;

const QuesInput = styled.textarea`
  width: 46vh;
  height: 40vh;
  border: none;
  overflow: auto;

  padding: 5px;
  margin-top: 5px;

  clear: clear;
`;

const SubButton = styled.div`
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
export default Ques;
