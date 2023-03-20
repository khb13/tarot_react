import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Today() {
  return (
    <Container>
      <TarotPlate>
        <InfoTarot>
          오늘 하루의 운세에 대한 카드를 뽑을 수 있습니다. 아래의 카드를
          눌러주세요!
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
  align-items: center;

  margin-top: 20px;
`;

const TarotPlate = styled.div`
  width: 50vh;
  height: 60vh;

  background-color: #fef5d4;
  color: black;
`;

const InfoTarot = styled.div`
  width: 46vh;

  font-size: 0.7rem;

  padding: 10px;
`;

const TarotButton = styled.div`
  margin: auto;
  text-align: center;

  width: 20vh;
  height: 30vh;
  border-radius: 5%;
  border: 3px solid #fff;
  background-color: #f2ab39;

  user-select: none;

  box-shadow: 5px 5px #7f6cdc;
`;

const InButton = styled.div`
  padding-top: 13vh;
  margin: auto;

  font-size: 1.2rem;

  font-weight: bold;
  color: white;

  cursor: pointer;
`;

export default Today;
