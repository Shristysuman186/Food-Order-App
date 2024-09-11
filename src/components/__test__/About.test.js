import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

test("Check if the About page is loading", () => {
    render(<About/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument()

});