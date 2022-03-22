import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import OrderEntry from "../../entry/OrderEntry";

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />);

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

// QUIZ TESTS
test("update toppings subtotal when toppings change", async () => {
  render(<Options optionType="toppings" />);

  const toppingsSubTotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  expect(toppingsSubTotal).toHaveTextContent("0.00");

  const cherryCheck = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  // check checkbox
  userEvent.click(cherryCheck);
  expect(toppingsSubTotal).toHaveTextContent("1.50");

  const MAndMCheckbox = await screen.findByRole("checkbox", {
    name: "M&Ms",
  });
  userEvent.click(MAndMCheckbox);
  expect(toppingsSubTotal).toHaveTextContent("3.00");

  // remove M&Ms topping back to 1.5
  userEvent.click(MAndMCheckbox);
  expect(toppingsSubTotal).toHaveTextContent("1.50");
});

//QUIZ GRAND TOTAL
describe("grand total", () => {
  test("grand total starts at $0.00", () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });
    expect(grandTotal).toHaveTextContent("0.00");
  });

  test("grand total updates properly if scoop is added first", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "3");
    expect(grandTotal).toHaveTextContent("6.00");
  });

  test("grand total updates properly if topping is added first", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });
    const cherryCheck = await screen.findByRole("checkbox", {
      name: "Cherries",
    });
    // check checkbox
    userEvent.click(cherryCheck);
    const MAndMCheckbox = await screen.findByRole("checkbox", {
      name: "M&Ms",
    });
    userEvent.click(MAndMCheckbox);
    expect(grandTotal).toHaveTextContent("3.00");
  });

  test("grand total updates properly if item is removed", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "3");
    const cherryCheck = await screen.findByRole("checkbox", {
      name: "Cherries",
    });

    userEvent.click(cherryCheck);
    expect(grandTotal).toHaveTextContent("7.50");
    // topping removed
    userEvent.click(cherryCheck);
    expect(grandTotal).toHaveTextContent("6.00");
    //scoop removed
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "2");
    expect(grandTotal).toHaveTextContent("4.00");
  });
});
