import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOption";
import Row from "react-bootstrap/Row";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // optiontype can be scoops ot toppings
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        //TODO: handle error response
      });
  }, [optionType]);

  // to replace with topping option once it is available
  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;

  const optionItems = items.map((optionItem) => {
    //console.log(optionItem.name)
    return <ItemComponent
      key={optionItem.name}
      name={optionItem.name}
      imagePath={optionItem.imagePath}
    />;
  });

  return <Row>{optionItems}</Row> 
}
