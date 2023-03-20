import { useState } from "react";
import styled from "styled-components";
import { VscDebugRestart } from "react-icons/vsc";

function Result() {
  //타로 데이터
  const tarot72 = [
    {
      title: "00.The Fool",
      kotitle: "광대",
      explain: "몽상, 우행, 극단, 열광",
    },
    {
      title: "01.The Magician",
      kotitle: "마술사",
      explain: "의지, 수완, 외교",
    },
    {
      title: "02.The High Priestess",
      kotitle: "교황",
      explain: "비밀, 신비, 영지",
    },
    {
      title: "03.The Empress",
      kotitle: "여제",
      explain: "결실, 행동, 세월의 길이, 미지의 것",
    },
    {
      title: "04.The Emperor",
      kotitle: "황제",
      explain: "통치, 견고함, 방어, 동맹",
    },
    {
      title: "05.The Hierophant",
      kotitle: "교황",
      explain: "신조, 사회성, 은혜와 유덕",
    },
    {
      title: "06.The Lovers",
      kotitle: "연인",
      explain: "매력, 사랑의 아름다움",
    },
    {
      title: "07.The Chariot",
      kotitle: "전차",
      explain: "원군, 섭리, 승리, 복수",
    },
    { title: "08.Strength", kotitle: "힘", explain: "힘, 용기, 관대, 명예" },
    {
      title: "09.The Hermit",
      kotitle: "은둔자",
      explain: "심려, 충고를 받다, 붕괴",
    },
    {
      title: "10.Wheel of Fortune",
      kotitle: "운명의 수레바퀴",
      explain: "행운, 전환기, 향상",
    },
    {
      title: "11.Justice",
      kotitle: "정의",
      explain: "평등, 올바름, 행정, 정당한 판결",
    },
    {
      title: "12.The Hanged Man",
      kotitle: "매달린 사람",
      explain: "영지, 신중, 시련, 직관",
    },
    { title: "13.Death", kotitle: "죽음", explain: "격변, 죽음과 재생" },
    {
      title: "14.Temperance",
      kotitle: "절제",
      explain: "조정, 중용, 검약, 관리",
    },
    {
      title: "15.The Devil",
      kotitle: "악마",
      explain: "폭력, 격렬, 바꿀 수 없음, 흑마술, 사심, 타락",
    },
    {
      title: "16.The Tower",
      kotitle: "탑",
      explain: "비탄, 재난, 불명예, 전락",
    },
    {
      title: "17.The Star",
      kotitle: "별",
      explain: "희망과 밝은 앞날, 명상, 영감, 방치",
    },
    {
      title: "18.The Moon",
      kotitle: "달",
      explain: "숨은 적, 환상, 기만, 실패",
    },
    {
      title: "19.The Sun",
      kotitle: "태양",
      explain: "물질적 행복, 행복한 결혼, 만족",
    },
    {
      title: "20.Judgement",
      kotitle: "심판",
      explain: "부활, 위치의 변화, 경신, 결과",
    },
    {
      title: "21.The World",
      kotitle: "세계",
      explain: "완성, 약속된 성공, 나그네",
    },
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
        <TarotButton>
          <InButton>{tarotResult.title}</InButton>
        </TarotButton>
      </Header>
      <TarotTitle>{tarotResult.kotitle}</TarotTitle>
      <CardExplain>{tarotResult.explain}</CardExplain>
      <ChangeButton onClick={() => changeTarot()}>
        <VscDebugRestart size={30} color="black" />
        <ReText>다시뽑기</ReText>
      </ChangeButton>
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;

  width: 60vh;
  height: 80vh;
  margin: auto;

  user-select: none;
`;

const Header = styled.div`
  margin: 20px;
  padding: 5px;
  margin-top: 4vh;
`;

const TarotButton = styled.div`
  margin: auto;
  text-align: center;
  margin-top: 2vh;

  width: 20vh;
  height: 30vh;
  border-radius: 5%;
  border: 3px solid #fff;
  background-color: #f2ab39;

  box-shadow: 5px 5px #7f6cdc;
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
`;

const CardExplain = styled.div`
  width: 60vh;
  margin-top: 2vh;

  text-align: center;
  margin-bottom: 2vh;

  font-size: 0.8rem;
`;

const ChangeButton = styled.div`
  margin-top: 2vh;
  text-align: center;

  margin: auto;

  width: 10vh;
  height: 5vh;

  border-bottom: 1px solid black;

  cursor: pointer;
`;

const ReText = styled.div`
  font-size: 0.8rem;

  font-weight: bold;
  color: black;
`;
export default Result;
