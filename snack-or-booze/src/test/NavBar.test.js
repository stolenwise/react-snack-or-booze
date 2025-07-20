import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("NavBar component", () => {

  // Smoke Test
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });

  // Test: shows all nav links
  test("shows all expected nav links", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText("Snack or Booze")).toBeInTheDocument();
    expect(screen.getByText("Snacks")).toBeInTheDocument();
    expect(screen.getByText("Drinks")).toBeInTheDocument();
    expect(screen.getByText("Add Item")).toBeInTheDocument();
  });

  // Test: links have correct href attributes
  test("nav links point to correct routes", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText("Snack or Booze").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Snacks").closest("a")).toHaveAttribute("href", "/snacks");
    expect(screen.getByText("Drinks").closest("a")).toHaveAttribute("href", "/drinks");
    expect(screen.getByText("Add Item").closest("a")).toHaveAttribute("href", "/add");
  });

});
