import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import SnackOrBoozeApi from "../Api";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import axios from "axios";


// Mock axios
jest.mock("axios");

describe("SnackOrBoozeApi", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getSnacks makes GET request to /snacks and returns data", async () => {
    const mockSnacks = [{ id: "chips", name: "Chips" }];
    axios.get.mockResolvedValueOnce({ data: mockSnacks });

    const result = await SnackOrBoozeApi.getSnacks();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/snacks");
    expect(result).toEqual(mockSnacks);
  });

  test("getDrinks makes GET request to /drinks and returns data", async () => {
    const mockDrinks = [{ id: "soda", name: "Soda" }];
    axios.get.mockResolvedValueOnce({ data: mockDrinks });

    const result = await SnackOrBoozeApi.getDrinks();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/drinks");
    expect(result).toEqual(mockDrinks);
  });

  test("addItem posts to correct endpoint and returns data", async () => {
    const newSnack = {
      type: "snacks",
      id: "pretzels",
      name: "Pretzels"
    };

    axios.post.mockResolvedValueOnce({ data: newSnack });

    const result = await SnackOrBoozeApi.addItem(newSnack);
    expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/snacks", newSnack);
    expect(result).toEqual(newSnack);
  });
});
