import Options from "./Options"
import { useOrderDetails } from '../../contexts/OrderDetails';

export default function OrderEntry(){
    const [orderDetails] = useOrderDetails();
    return (<div>
        <Options optionType='scoops'/>
        <Options optionType='toppings'/>
        <h1>        
        {`Grand total: ${orderDetails.totals['grandTotal']}`}
      </h1>
    </div>)
}