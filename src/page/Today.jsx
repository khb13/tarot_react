import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Today() {
  return (
    <Container>
      <TarotPlate>
        <InfoTarot>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          voluptatem quibusdam recusandae mollitia. Quam, perspiciatis impedit.
        </InfoTarot>

        <Link to="../result">
          {/* <div onClick={() => changeTarot()}> */}
          <TarotButton>
            <InButton>Select</InButton>
          </TarotButton>
          {/* </div> */}
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

  background-color: #eee;
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
  background-color: #ddd;

  user-select: none;

  box-shadow: 5px 5px grey;
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
