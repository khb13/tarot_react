import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <LoginSheet>
        <form>
          <LoginTarot>
            <h3>로그인</h3>
            <input placeholder="아이디" required></input>
            <input placeholder="비밀번호" type="password" required></input>

            <LoginButton type="submit">
              <Link to="/profile">로그인</Link>
            </LoginButton>
          </LoginTarot>

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
  margin: 15vh auto;
`;

const LoginSheet = styled.div`
  width: 50vh;
  height: 40vh;
  position: relative;

  background-color: #fef5d4;

  margin: 0px auto;
  padding: 20px;

  border-radius: 2%;
  box-shadow: 5px 5px #7f6cdc;

  form {
    font-size: 0.8rem;
    padding: 5px;
    margin-top: 10px;
    margin: auto;
    max-width: 50vh;
    max-height: 40vh;
  }
`;

const LoginTarot = styled.div`
  text-align: center;

  margin-bottom: 10px;

  h3 {
    margin: 20px 0px;
    user-select: none;
    font-size: 1.3rem;
  }
  input {
    margin: 5px;
    width: 40vh;
  }
`;

const LoginButton = styled.button`
  border: 1px solid #ddd;
  max-width: 7vh;

  margin: 30px auto;

  display: flex;
  justify-content: center;
  background-color: white;

  text-align: center;
  padding: 2px;

  cursor: pointer;
`;

const LoginOption = styled.div`
  text-align: center;
  justify-content: center;

  margin: 0px auto;

  user-select: none;
`;

const LinkOption = styled.span`
  & + & {
    margin-left: 10px;
  }
  text-decoration: underline;
`;
export default Login;
