import { Link } from "react-router-dom";
import styled from "styled-components";

function Profile() {
  return (
    <Container>
      <Profileback>
        <form>
          <ProImg></ProImg>
          <ProName>닉네임</ProName>
          <ID>
            <ProId>아이디</ProId>
            <ProUserId>예시 아이디</ProUserId>
          </ID>
          <Email>
            <ProEmail>이메일</ProEmail>
            <ProUserEmail>예시 이메일</ProUserEmail>
          </Email>
          <Link to="/editprofile">
            <ReProfile>프로필 수정</ReProfile>
          </Link>
        </form>
      </Profileback>
    </Container>
  );
}

const Container = styled.div`
  width: 60vh;

  margin: auto;
  padding: 8px;

  background-color: #fef5d4;

  box-sizing: border-box;
  border: 10px solid #f2ab39;

  border-radius: 2%;

  box-shadow: 0px 5px #7f6cdc;
`;

const Profileback = styled.div``;

const ProImg = styled.div`
  width: 20vh;
  height: 20vh;

  margin: 60px auto 20px;

  background-color: orange;

  border-radius: 50%;
`;

const ProName = styled.div`
  text-align: center;
  width: 100px;
  margin: 10px auto 60px;

  font-weight: bold;
`;

const ID = styled.div``;

const Email = styled.div``;

const ProId = styled.div`
  max-width: 80px;

  margin: 10px;
  padding: 2px 10px;

  font-size: 0.7rem;
`;

const ProUserId = styled.div`
  max-width: 200px;

  border-bottom: 1px solid #333;

  margin: 10px;
  padding: 2px 10px;

  font-size: 0.7rem;
`;

const ProEmail = styled.div`
  max-width: 80px;

  margin: 10px;
  padding: 2px 10px;

  font-size: 0.7rem;
`;

const ProUserEmail = styled.div`
  width: 200px;

  margin: 10px;
  padding: 2px 10px;

  border-bottom: 1px solid #333;

  font-size: 0.7rem;
`;

const ReProfile = styled.div`
  text-align: center;

  max-width: 100px;

  padding: 2px;
  margin: 30px auto;

  font-size: 0.8rem;
  background-color: #fff;

  border: 2px solid #ddd;
  border-radius: 15%;

  cursor: pointer;
`;

export default Profile;
