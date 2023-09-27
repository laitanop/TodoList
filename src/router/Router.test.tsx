import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for testing

import App from "../App";

test("renders App", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText("Learn React")).toBeInTheDocument();
});
