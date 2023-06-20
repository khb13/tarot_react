import { useState } from "react";
import styled from "styled-components";

function SignUp() {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");

  const [button, setButton] = useState(true);

  function changeButton() {
    id.length >= 5 && pw.length >= 5 ? setButton(false) : setButton(true);
  }

  return (
    <Container>
      <SignSheet>
        <form>
          <SignUpTarot>
            <h3>회원가입</h3>
            <input
              placeholder="닉네임"
              type="text"
              name="nick"
              required
            ></input>
            <input
              placeholder="이메일"
              type="email"
              name="email"
              required
            ></input>
            <input placeholder="아이디" type="text" name="id" required></input>
            <input
              placeholder="비밀번호"
              type="password"
              name="pass"
              required
            ></input>
            <input
              placeholder="비밀번호 확인"
              type="password"
              name="copass"
              required
            ></input>
          </SignUpTarot>
          <SignUpButton type="submit">회원가입</SignUpButton>
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
  width: 400px;
  height: 330px;

  background-color: #fef5d4;

  border-radius: 2%;

  box-shadow: 5px 5px #7f6cdc;

  form {
    font-size: 0.8rem;
    padding: 5px;
    margin-top: 10px;
  }
`;

const SignUpTarot = styled.div`
  text-align: center;

  margin-bottom: 10px;

  h3 {
    margin: 20px 0px;
    user-select: none;
    font-size: 1.3rem;
  }
  input {
    margin: 5px;
    width: 350px;
    height: 25px;
  }
`;

const SignUpButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 80px;

  margin: 0 auto 10px;
  padding: 2px;

  background-color: white;
  border: 1px solid #ddd;

  cursor: pointer;
`;
export default SignUp;
