import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import SnackOrBoozeApi from "../Api";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';



// Smoke Test: App renders without crashing
test("renders without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

// Sanity test: mock API responses
jest.mock("../Api");

beforeEach(() => {
  SnackOrBoozeApi.getSnacks.mockResolvedValue([
    { id: "nachos", name: "Nachos", description: "", recipe: "", serve: "" }
  ]);
  SnackOrBoozeApi.getDrinks.mockResolvedValue([
    { id: "cola", name: "Cola", description: "", recipe: "", serve: "" }
  ]);
});

test("sanity: renders loading screen and then navbar", async () => {
  render(<App />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/snack or booze/i)).toBeInTheDocument();
  });
});