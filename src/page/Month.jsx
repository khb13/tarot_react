import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function Month() {
  return (
    <Container>
      <TarotPlate>
        <InfoTarot>
          이 달의 운세에 대한 카드를 뽑을 수 있습니다. 아래의 카드를 눌러주세요!
        </InfoTarot>

        <Link to="../result">
          <TarotButton>
            <InButton>Select</InButton>
          </TarotButton>
        </Link>
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
`;

const InfoTarot = styled.div`
  width: 340px;

  padding: 20px;
  margin: auto;

  font-size: 0.7rem;
`;

const TarotButton = styled.div`
  text-align: center;

  width: 140px;
  height: 210px;

  margin: 20px auto 0;

  border-radius: 5%;
  border: 3px solid #fff;

  background-color: #f2ab39;
  box-shadow: 5px 5px #7f6cdc;

  user-select: none;
`;

const InButton = styled.div`
  padding-top: 86px;
  margin: auto;

  font-size: 1.2rem;
  font-weight: bold;
  color: white;

  cursor: pointer;
`;

export default Month;
