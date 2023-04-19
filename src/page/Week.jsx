import styled from "styled-components";

function Week() {
  return (
    <Container>
      <TarotPlate></TarotPlate>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
`;

const TarotPlate = styled.div`
  width: 50vh;
  height: 60vh;

  background-color: #fef5d4;

  border-radius: 2%;
`;
export default Week;
