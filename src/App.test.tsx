// TEST PATTERN: AAA (Arrange, Act, Assert )
// Arrange
import App from "./App";
import { render, screen } from "@testing-library/react"; // rtl 

// Act
test("renders heading with Welcome to Unit Testing React App", () => {
  render(<App />);
  const element = screen.getByText("Welcome to Unit Testing React app!!!"); 
  
  // assert -- MUST
  expect(element).toBeInTheDocument();
});

//run npm test and then give a