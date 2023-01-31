import styled from "styled-components";

function Today() {
  const tarot72 = [
    "0.The Fool",
    "1.The Magician",
    "2.The High Priestess",
    "03.The Empress",
    "04.The Emperor",
    "05.The Hierophant",
    "06.The Lovers",
    "07.The Chariot",
    "08.Strength",
    "09.The Hermit",
    "10.Wheel of Fortune",
    "11.Justice",
    "12.The Hanged Man",
    "13.Death",
    "14.Temperance",
    "15.The Devil",
    "16.The Tower",
    "17.The Star",
    "18.The Moon",
    "19.The Sun",
    "20.Judgement",
    "21.The World",
  ];

  const getRandomTarot = function (length) {
    return parseInt(Math.random() * length);
  };

  return (
    <Container>
      <TarotPlate>
        카드 뒷면을 누르면 타로가 하나 나옴. 섞이는 모션이 있으면 좋겠음. 기기?
        아이피? 별로 하루에 한 장 고정 되도록 노력
        {getRandomTarot(tarot72.length)}
        <TarotButton>버튼</TarotButton>
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

const TarotButton = styled.div`
  margin: auto;

  width: 5vh;
  border-radius: 50%;
  background-color: orange;
`;

export default Today;
