import "./CardItemList.scss";

import CardItem from "../card_item/CardItem";

function CardItemList(props) {
  return (
    <ul>
      {props.data.map((data) => {
        return <CardItem key={data.itemId} data={data} />;
      })}
    </ul>
  );
}

export default CardItemList;
