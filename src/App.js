import "./App.css";

import CardList from "./components/card_list/CardList";
import Card from "./components/card/Card";

function App() {
  return (
    <CardList>
      {cards.map((data) => {
        return <Card key={data.cardId} data={data} />;
      })}
    </CardList>
  );
}

const cards = [
  {
    cardId: 1,
    cardImage: "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201103134054_kr.jpg?type=thumb&opt=R329x247@2xa",
    cardTypeLabel: "NEW",
    cardType: "new",
    cardTitle: "촉촉함을 원해요",
    cardContent: "재채기는 콜록 콜록 눈,코,입 모두 간질 간질. 이게 다 건조함 때문이라구! 건조함을 해결하러 온 꿀꿀꿀귀탱 가습기들, 구경해볼까요?",
    cardItems: [],
  },
  {
    cardId: 2,
    cardImage: "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa",
    cardTypeLabel: "Good",
    cardType: "good",
    cardTitle: "통통미 폭발 구름 폭신 필로우",
    cardContent: "통통하고 말랑 말랑한 너희에게 내 하루 시작과 끝에서 힐링을 부탁해!",
    cardItems: [
      {
        itemId: 1,
        itemImage: "https://t1.daumcdn.net/friends/prod/product/20201020152815054_8809721505908_AW_00.jpg?type=thumb&opt=R103x103@2xa",
        itemTitle: "구름폭신필로우_라이언",
        itemPrice: "39,000원",
      },
      {
        itemId: 2,
        itemImage: "https://t1.daumcdn.net/friends/prod/product/20201020152804391_8809721505915_AW_00.jpg?type=thumb&opt=R103x103@2xa",
        itemTitle: "구름폭신필로우_어피치",
        itemPrice: "39,000원",
      },
      {
        itemId: 3,
        itemImage: "https://t1.daumcdn.net/friends/prod/product/20201020152905998_8809721505922_AW_00.jpg?type=thumb&opt=R103x103@2xa",
        itemTitle: "구름폭신필로우_무지",
        itemPrice: "39,000원",
      },
    ],
  },
  {
    cardId: 3,
    cardImage: "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201111183631_kr.jpg?type=thumb&opt=R335x187@2xa",
    cardTypeLabel: "Theme",
    cardType: "theme",
    cardTitle: "올 겨울엔 프렌즈랑 메리 화이트 크리스마스!",
    cardContent: "올해 크리스마스엔 눈이 올까요? 안오면 어때요. 이미 프렌즈들이 내 마음에 하얀 눈을 내려주고 있는걸!",
    cardItems: [
      {
        itemId: 1,
        itemImage: "https://t1.daumcdn.net/friends/prod/product/20201020152815054_8809721505908_AW_00.jpg?type=thumb&opt=R103x103@2xa",
        itemTitle: "구름폭신필로우_라이언",
        itemPrice: "39,000원",
      },
      {
        itemId: 2,
        itemImage: "https://t1.daumcdn.net/friends/prod/product/20201020152804391_8809721505915_AW_00.jpg?type=thumb&opt=R103x103@2xa",
        itemTitle: "구름폭신필로우_어피치",
        itemPrice: "39,000원",
      },
      {
        itemId: 3,
        itemImage: "https://t1.daumcdn.net/friends/prod/product/20201020152905998_8809721505922_AW_00.jpg?type=thumb&opt=R103x103@2xa",
        itemTitle: "구름폭신필로우_무지",
        itemPrice: "39,000원",
      },
    ],
  },
];

export default App;
