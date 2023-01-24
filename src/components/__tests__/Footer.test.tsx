import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Renders the Footer properly", () => {
  test("renders the footer content", () => {
    render(<Footer />);
    const footerContent = screen.getByText(/Created by Solomon Igori/i);
    expect(footerContent).toBeInTheDocument();
  });

  test("renders the current year", () => {
    const currYear = new Date().getFullYear();

    render(<Footer />);
    const year = screen.getByText(currYear);
    expect(year).toBeInTheDocument();
  });
});
