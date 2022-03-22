import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import {OrderDetailsProvider} from '../../../contexts/OrderDetails'

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />, {wrapper: OrderDetailsProvider});

  // make sure total starts qith 0
  const scoopSubTotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopSubTotal).toHaveTextContent("0.00");

  // update vanilla scoop to 1 and check subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  // clear vanilla input and type 1
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopSubTotal).toHaveTextContent("2.00");

  //update chocolate to 2 and check sub total again
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopSubTotal).toHaveTextContent("6.00");
});
