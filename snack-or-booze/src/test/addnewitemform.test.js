// src/test/addnewitemform.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddItemForm from "../AddItemForm";

// mock useNavigate so the component doesn't error
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn()
}));

test("renders AddItemForm without crashing", () => {
  render(
    <MemoryRouter>
      <AddItemForm addItem={jest.fn()} />
    </MemoryRouter>
  );
});

test("updates name input on user typing", () => {
    render(
      <MemoryRouter>
        <AddItemForm addItem={jest.fn()} />
      </MemoryRouter>
    );
  
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    fireEvent.change(nameInput, { target: { value: "Oreos" } });
  
    expect(nameInput.value).toBe("Oreos");
  });
  