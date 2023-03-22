import styled from "styled-components";

function SignUp() {
  return (
    <Container>
      <SignSheet>
        <form>
          <SignUpTarot>
            <h3>회원가입</h3>
            <input placeholder="닉네임"></input>
            <input placeholder="이메일" type="email"></input>
            <input placeholder="아이디"></input>
            <input placeholder="비밀번호" type="password"></input>
            <input placeholder="비밀번호 확인" type="password"></input>
          </SignUpTarot>
          <SignUpButton>회원가입</SignUpButton>
        </form>
      </SignSheet>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 15vh;
`;

const SignSheet = styled.div`
  width: 50vh;
  height: 40vh;

  background-color: #fef5d4;

  border-radius: 2%;

  form {
    font-size: 0.8rem;
    padding: 5px;
    margin-top: 10px;
  }
`;

const SignUpTarot = styled.div`
  text-align: center;

  margin-bottom: 20px;

  h3 {
    margin: 20px 0px;
    user-select: none;
    font-size: 1.3rem;
  }
  input {
    margin: 5px;
    width: 40vh;
    height: 3vh;
  }
`;

const SignUpButton = styled.div`
  text-align: center;
  max-width: 10vh;

  margin: 0 auto 10px;
  padding: 2px;

  background-color: white;
  border: 1px solid #ddd;

  cursor: pointer;
`;
export default SignUp;
