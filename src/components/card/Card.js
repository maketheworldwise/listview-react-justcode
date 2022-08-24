import "./Card.scss";

import CardItemList from "../card_item_list/CardItemList";

function Card(props) {
  const { cardImage, cardType, cardTypeLabel, cardTitle, cardContent, cardItems } = props.data;

  return (
    <article className="card">
      <div className="cardImg">
        <img alt="cardImg" src={cardImage} />
      </div>
      <div className="cardMain">
        <div className="status">
          <span className={cardType}>{cardTypeLabel}</span>
        </div>
        <h3>{cardTitle}</h3>
        <div>
          <p>{cardContent}</p>
        </div>
        {cardItems.length !== 0 && <CardItemList data={cardItems} />}
      </div>
    </article>
  );
}

export default Card;
