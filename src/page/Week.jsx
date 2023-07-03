import { useState } from "react";
import styled from "styled-components";

function Week() {
  return (
    <Container>
      <TarotPlate>
        <TarotLineTop>
          {[...Array(12)].map((_, index) => (
            <TarotCard key={index} index={index}>
              카드 {index + 1}
            </TarotCard>
          ))}
        </TarotLineTop>
        <TarotLineBottom>
          {[...Array(12)].map((_, index) => (
            <TarotCard key={index + 12} index={index + 12}>
              카드 {index + 13}
            </TarotCard>
          ))}
        </TarotLineBottom>
      </TarotPlate>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TarotPlate = styled.div`
  width: 360px;
  height: 420px;

  background-color: #fef5d4;

  border-radius: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TarotLine = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: relative;
`;

const TarotLineTop = styled(TarotLine)`
  width: 50%;
`;

const TarotLineBottom = styled(TarotLine)`
  width: 50%;
`;

const TarotCard = styled.div`
  text-align: center;
  width: 15vh;
  height: 10vh;
  margin: 0 2vh;
  border-radius: 5%;
  border: 3px solid #fff;
  background-color: #f2ab39;
  box-shadow: 3px 3px #7f6cdc;
  position: absolute;
  user-select: none;
  cursor: pointer;
  bottom: ${(props) =>
    5 * props.index}vh; /* 아래로 스프레드되도록 bottom 값 설정 */
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

export default Week;
