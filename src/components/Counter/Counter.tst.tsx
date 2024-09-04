// AAA (Arrange, Act, Assert )
// Arrange
import { fireEvent, render, screen } from "@testing-library/react"; // rtl
import Counter from "./Counter";

// group of related tests or test cases or test specs  == Test Suite
describe("Counter", () => {
  // Act
  // Test spec or Test or test case
  it("renders counter when initial value 0", () => {
    render(<Counter/>);
    const element = screen.getByText("counterValue");
    expect(element.textContent).toBe("0");
  });
  it("renders counter when increment button is clicked", () => {
    render(<Counter/>);
    // fireEvent.click(incrementBtn);//triggering the click programmically
    const element = screen.getByText("counterValue");
    expect(element.textContent).toBe("0");

    // fireEvent.click(incrementBtn);//triggering the click programmically
    // fireEvent.click(incrementBtn);//triggering the click programmically
    // fireEvent.click(incrementBtn);//triggering the click programmically
    // expect(element.textContent).toBe("4");
    const incrementBtn = screen.getByTestId("incrementBtn");
    for(var i=0;i<10;i++){
        fireEvent.click(incrementBtn);//triggering the click programmically
    }
    expect(element.textContent).toBe("10");

  });
  //Add decrement btn
});
