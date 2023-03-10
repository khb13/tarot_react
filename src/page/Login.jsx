import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <LoginSheet>
        <form>
          <LoginTarot>
            <h3>로그인</h3>
            <input placeholder="아이디"></input>
            <br />
            <input placeholder="비밀번호" type="password"></input>
          </LoginTarot>
          <LoginButton>로그인</LoginButton>

          <LoginOption>
            <LinkOption>
              <Link to="/signup">회원가입</Link>
            </LinkOption>
            <LinkOption>
              <Link to="/findid">아이디 찾기</Link>
            </LinkOption>
            <LinkOption>
              <Link to="/findpass">비밀번호 찾기</Link>
            </LinkOption>
          </LoginOption>
        </form>
      </LoginSheet>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 15vh;
`;

const LoginSheet = styled.div`
  width: 50vh;
  height: 28vh;

  background-color: #eee;
  color: black;

  form {
    font-size: 0.8rem;
    padding: 5px;
    margin-top: 10px;
  }
`;

const LoginTarot = styled.div`
  text-align: center;

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

  margin-bottom: 10px;
`;

const LoginButton = styled.div`
  border: 1px solid #ddd;
  max-width: 7vh;

  margin: auto;
  margin-bottom: 10px;

  background-color: white;
  text-align: center;
  padding: 2px;

  cursor: pointer;
`;

const LoginOption = styled.div`
  margin: auto;
  max-width: 25vh;
`;

const LinkOption = styled.span`
  & + & {
    margin-left: 10px;
  }
  max-width: 10vh;

  text-align: center;
  justify-content: center;

  text-decoration: underline;
`;
export default Login;
