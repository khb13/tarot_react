import { Link } from "react-router-dom";
import styled from "styled-components";

function Editprofile() {
  return (
    <Container>
      <Profileback>
        <form>
          <ProImg></ProImg>
          <ProName placeholder="닉네임" type="text"></ProName>
          <ID>
            <ProId>아이디</ProId>
            <ProUserId></ProUserId>
          </ID>
          <Email>
            <ProEmail type="email">이메일</ProEmail>
            <ProUserEmail></ProUserEmail>
          </Email>
          <Link to="/profile">
            <ReProfile>수정 완료</ReProfile>
          </Link>
        </form>
      </Profileback>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fef5d4;
  margin: auto;

  /* display: flex; */
  justify-content: center;
  align-items: center;

  width: 60vh;

  padding: 8px;
`;

const Profileback = styled.div``;

const ProImg = styled.div`
  width: 20vh;
  height: 20vh;

  justify-content: center;
  align-items: center;
  margin: 20px auto;

  background-color: orange;

  border-radius: 50%;
`;

const ProName = styled.input`
  width: 100px;
  margin: 40px 0px 20px 10px;
  justify-content: center;
  align-items: center;
  // text-align: center;
  font-weight: bold;
`;

const ID = styled.div``;

const Email = styled.div``;

const ProId = styled.div`
  max-width: 80px;

  margin: 10px 0px 0px 0px;
  padding: 2px 10px;

  font-size: 0.7rem;
`;

const ProUserId = styled.input`
  max-width: 200px;

  border-bottom: 1px solid #333;

  margin: 10px;
  padding: 2px 10px;

  font-size: 0.7rem;
`;

const ProEmail = styled.div`
  max-width: 80px;

  margin: 10px 0px 0px 0px;
  padding: 2px 10px;

  font-size: 0.7rem;
`;

const ProUserEmail = styled.input`
  width: 200px;
  border-bottom: 1px solid #333;

  margin: 10px;
  padding: 2px 10px;

  font-size: 0.7rem;
`;

const ReProfile = styled.div`
  font-size: 0.8rem;
  background-color: #fff;
  max-width: 100px;

  text-align: center;

  padding: 2px;
  margin: 30px auto;

  border: 2px solid #ddd;

  border-radius: 15%;

  cursor: pointer;
`;
export default Editprofile;
