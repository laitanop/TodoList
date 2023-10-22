import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for testing

import App from "../App";

test("renders App", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    );
});
