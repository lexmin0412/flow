import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from './pages/node-selected'

describe("test", () => {
  test("first unit test", () => {
    render(<Home />);
    expect(screen.getByText("AntD Demo")).toBeInTheDocument();
  });
});
