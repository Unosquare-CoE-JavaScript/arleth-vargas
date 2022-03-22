import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOption";
import ToppingOptions from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
import Row from "react-bootstrap/Row";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails, updateItemCount] = useOrderDetails();

  useEffect(() => {
    // optiontype can be scoops ot toppings
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }
  // to replace with topping option once it is available
  const ItemComponent =
    optionType === "scoops" ? ScoopOptions : "toppings" ? ToppingOptions : null;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map((optionItem) => {
    //console.log(optionItem.name)
    return (
      <ItemComponent
        key={optionItem.name}
        name={optionItem.name}
        imagePath={optionItem.imagePath}
        updateItemCount={(itemName, newItemCount) =>
          updateItemCount(itemName, newItemCount, optionType)
        }
      />
    );
  });

  return (
    <>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}
