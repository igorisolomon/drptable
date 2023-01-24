import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../layouts/Dashboard";

describe("Renders the Footer properly", () => {

  test("renders the footer content", async () => {
    render(<Dashboard />);
    const firstName = await screen.findByText(/adam/i);
    expect(firstName).toBeInTheDocument();
    const lastName = await screen.findByText(/adam/i);
    expect(lastName).toBeInTheDocument();

    const email = await screen.findByText(/adam/i);
    expect(email).toBeInTheDocument();

    const img = await screen.findAllByAltText(/adam smith/i);
    expect(img[0]).toHaveAttribute('src', 'https://reqres.in/img/faces/1-image.jpg')
  });
});
