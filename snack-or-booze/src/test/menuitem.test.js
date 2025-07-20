import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItem from "../MenuItem";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom';

// Sample data
const testItems = [
  {
    id: "cola",
    name: "Cola",
    description: "A refreshing drink.",
    recipe: "Just pour it.",
    serve: "Cold"
  }
];

describe("MenuItem", () => {
  // Smoke test
  test("renders without crashing for valid item", () => {
    render(
      <MemoryRouter initialEntries={["/drinks/cola"]}>
        <Routes>
          <Route path="/drinks/:id" element={<MenuItem items={testItems} cantFind="/not-found" />} />
        </Routes>
      </MemoryRouter>
    );
  });

  // Redirects to cantFind when item not found
  test("redirects to cantFind route when item is not found", () => {
    render(
      <MemoryRouter initialEntries={["/drinks/sprite"]}>
        <Routes>
          <Route path="/drinks/:id" element={<MenuItem items={testItems} cantFind="/not-found" />} />
          <Route path="/not-found" element={<div>Not Found Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Not Found Page")).toBeInTheDocument();
  });

  // Shows correct content for valid item
  test("displays correct item content", () => {
    render(
      <MemoryRouter initialEntries={["/drinks/cola"]}>
        <Routes>
          <Route path="/drinks/:id" element={<MenuItem items={testItems} cantFind="/not-found" />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Cola")).toBeInTheDocument();
    expect(screen.getByText("A refreshing drink.")).toBeInTheDocument();
    expect(screen.getByText(/Just pour it/)).toBeInTheDocument();
    expect(screen.getByText(/Cold/)).toBeInTheDocument();
  });
});
