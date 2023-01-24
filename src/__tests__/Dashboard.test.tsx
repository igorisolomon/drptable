import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Dashboard from "../layouts/Dashboard";

describe("Renders the Table properly", () => {
  test("renders the table content", async () => {
    render(<Dashboard />);

    const firstName = await screen.findByText(/adam/i);
    expect(firstName).toBeInTheDocument();

    const lastName = await screen.findByText(/adam/i);
    expect(lastName).toBeInTheDocument();

    const email = await screen.findByText(/adam/i);
    expect(email).toBeInTheDocument();

    const img = await screen.findAllByAltText(/adam smith/i);
    expect(img[0]).toHaveAttribute(
      "src",
      "https://reqres.in/img/faces/1-image.jpg"
    );
  });
});

describe("Edit table content", () => {
  test("renders the table content", async () => {
    render(<Dashboard />);

    const cell = await screen.findByText(/adam/i);
    expect(cell).toBeInTheDocument();

    // simulate a double click
    fireEvent.doubleClick(cell)

    // Find the input element that was rendered
    const input = screen.getByRole('textbox');

    // Simulate a change event on the input
    fireEvent.change(input, { target: { value: 'Solomon' } });

    console.log();

    // Find the cell again
    const updatedCell = screen.getByText(/solomon/i);
  
    // Assert that the cell value has been updated
    expect(updatedCell).toBeInTheDocument();
  });
});

