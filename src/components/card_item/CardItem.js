import "./CardItem.scss";

function CardItem(props) {
  const { itemImage, itemTitle, itemPrice } = props.data;

  return (
    <li className="item list">
      <img alt="item" src={itemImage} />
      <div className="content">
        <div>
          <p>{itemTitle}</p>
          <p className="price">{itemPrice}</p>
        </div>
        <button className="button" />
      </div>
    </li>
  );
}

export default CardItem;
