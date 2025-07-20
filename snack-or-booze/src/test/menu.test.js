import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "../Menu";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Menu component", () => {

  // Smoke Test
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Menu items={[]} type="snacks" />
      </MemoryRouter>
    );
  });

  // Test: shows loading state if no items or no type
  test("shows loading message if items or type are missing", () => {
    const { container } = render(
      <MemoryRouter>
        <Menu items={[]} type="" />
      </MemoryRouter>
    );
    expect(container).toHaveTextContent(/loading menu/i);
  });

  // Test: renders snack links
  test("renders links to items", () => {
    const snacks = [
      { id: "nachos", name: "Nachos" },
      { id: "pretzels", name: "Pretzels" }
    ];

    render(
      <MemoryRouter>
        <Menu items={snacks} type="snacks" />
      </MemoryRouter>
    );

    // Check text is present
    expect(screen.getByText("Nachos")).toBeInTheDocument();
    expect(screen.getByText("Pretzels")).toBeInTheDocument();

    // Check links
    expect(screen.getByText("Nachos").closest("a")).toHaveAttribute("href", "/snacks/nachos");
    expect(screen.getByText("Pretzels").closest("a")).toHaveAttribute("href", "/snacks/pretzels");
  });
});
