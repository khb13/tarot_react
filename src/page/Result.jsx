import { useState } from "react";
import styled from "styled-components";
import { tarotResult } from "./Today";
import { VscDebugRestart } from "react-icons/vsc";

function Result() {
  const tarot72 = [
    { title: "00.The Fool", explain: "바보 카드 설명" },
    { title: "01.The Magician", explain: "마법사 카드 설명" },
    { title: "02.The High Priestess", explain: "고위 여사제 카드 설명" },
    { title: "03.The Empress", explain: "여제 카드 설명" },
    { title: "04.The Emperor", explain: "황제 카드 설명" },
    { title: "05.The Hierophant", explain: "교황 카드 설명" },
    { title: "06.The Lovers", explain: "연인 카드 설명" },
    { title: "07.The Chariot", explain: "전차 카드 설명" },
    { title: "08.Strength", explain: "힘 카드 설명" },
    { title: "09.The Hermit", explain: "은둔자 카드 설명" },
    { title: "10.Wheel of Fortune", explain: "행운의 수레바퀴 카드 설명" },
    { title: "11.Justice", explain: "정의 카드 설명" },
    { title: "12.The Hanged Man", explain: "매달린 남자 카드 설명" },
    { title: "13.Death", explain: "죽음 카드 설명" },
    { title: "14.Temperance", explain: "절제 카드 설명" },
    { title: "15.The Devil", explain: "악마 카드 설명" },
    { title: "16.The Tower", explain: "탑 카드 설명" },
    { title: "17.The Star", explain: "별 카드 설명" },
    { title: "18.The Moon", explain: "달 카드 설명" },
    { title: "19.The Sun", explain: "태양 카드 설명" },
    { title: "20.Judgement", explain: "심판 카드 설명" },
    { title: "21.The World", explain: "세계 카드 설명" },
  ];

  const getRandomTarot = function (length) {
    return parseInt(Math.random() * length);
  };

  const [tarotResult, setTarotResult] = useState(
    tarot72[getRandomTarot(tarot72.length)]
  );

  const changeTarot = function () {
    setTarotResult(tarot72[getRandomTarot(tarot72.length)]);
  };

  return (
    <Container>
      <Header>
        {/* <TarotName>{tarotResult}</TarotName> */}
        <TarotButton>
          <InButton>{tarotResult.title}</InButton>
        </TarotButton>
      </Header>
      <TarotTitle>{tarotResult.title}</TarotTitle>
      <CardExplain>{tarotResult.explain}</CardExplain>
      <ChangeButton onClick={() => changeTarot()}>
        <VscDebugRestart size={30} />
        <ReText>다시뽑기</ReText>
      </ChangeButton>
    </Container>
  );
}

const Container = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;

  width: 60vh;
  height: 80vh;
  margin: auto;
`;

const Header = styled.div`
  margin: 20px;
  padding: 5px;
  margin-top: 4vh;
`;

const TarotName = styled.div`
  width: 30vh;
`;

const TarotButton = styled.div`
  margin: auto;
  text-align: center;
  margin-top: 2vh;

  width: 20vh;
  height: 30vh;
  border-radius: 5%;
  border: 3px solid #fff;
  background-color: #ddd;

  user-select: none;

  box-shadow: 5px 5px grey;
`;

const TarotTitle = styled.div`
  text-align: center;

  font-weight: bold;
`;

const InButton = styled.div`
  padding-top: 13vh;
  margin: auto;

  font-size: 1.2rem;

  font-weight: bold;
  color: white;

  /* cursor: pointer; */
`;

const CardExplain = styled.div`
  width: 60vh;
  margin-top: 2vh;

  text-align: center;
  margin-bottom: 2vh;
`;

const ChangeButton = styled.div`
  margin-top: 2vh;
  text-align: center;

  margin: auto;

  width: 10vh;
  height: 5vh;

  border-bottom: 1px solid #888;

  cursor: pointer;
`;

const ReText = styled.div`
  font-size: 0.8rem;

  font-weight: bold;
  color: #666;
`;
export default Result;
