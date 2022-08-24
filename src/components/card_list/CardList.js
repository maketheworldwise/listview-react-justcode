import "./CardList.scss";

function CardList(props) {
  return <div className="cardList">{props.children}</div>;
}

export default CardList;
