import { useState } from "react";
import styled from "styled-components";

function Week() {
  // const [rpTarot, setRpTarot] = useState();

  // function repeattarot(rpTarot){
  //   var arr = [];
  //   for(var i =0; i<12; i++){

  //     arr.push(
  //     <TarotCard></TarotCard>
  //           <Between></Between>
  //     )

  //   }

  //   return arr;
  // }

  return (
    <Container>
      <TarotPlate>
        <TarotLine>
          {/*for문으로 해결되나? */}
          {/* {for(int i=0;i=11;i++){
            
          }} */}

          <TarotCard></TarotCard>
          <Between></Between>
          <TarotCard></TarotCard>
          <Between></Between>
          <TarotCard></TarotCard>
          <Between></Between>
          <TarotCard></TarotCard>
          <Between></Between>
          <TarotCard></TarotCard>
          <Between></Between>
          <TarotCard></TarotCard>
          <Between></Between>
          <TarotCard></TarotCard>
          <Between></Between>
          <TarotCard></TarotCard>
          <Between></Between>
          <TarotCard></TarotCard>
        </TarotLine>
        <TarotLine>
          <TarotCard></TarotCard>
          <TarotCard></TarotCard>
          <TarotCard></TarotCard>
          <TarotCard></TarotCard>
          <TarotCard></TarotCard>
          <TarotCard></TarotCard>
          <TarotCard></TarotCard>
          <TarotCard></TarotCard>
          <TarotCard></TarotCard>
          <TarotCard></TarotCard>
        </TarotLine>
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
  width: 50vh;
  height: 60vh;

  background-color: #fef5d4;

  border-radius: 2%;
`;

const TarotLine = styled.div`
  width: 24vh;
  height: 60vh;

  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0px auto;

  flex-direction: row;

  float: left;

  position: relative;
`;

const TarotCard = styled.div`
  text-align: center;

  width: 12vh;
  height: 8vh;

  margin: 20px auto 0;

  border-radius: 5%;
  border: 3px solid #fff;

  background-color: #f2ab39;
  box-shadow: 3px 3px #7f6cdc;

  position: absolute;

  user-select: none;

  &+&: {
  }
`;

const Between = styled.div`
  width: 12vh;
  height: 2vh;

  position: absolute;

  background-color: #000;
`;
export default Week;
