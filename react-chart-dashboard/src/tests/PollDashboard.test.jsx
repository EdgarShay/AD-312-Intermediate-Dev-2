import { fireEvent, render, screen } from "@testing-library/react";

import PollDashboard from "../components/PollDashboard";

import "@testing-library/jest-dom";

describe("Poll Dashboard", () => {

    test("initial counts start at zero", () => {
        render(<PollDashboard />);

        expect(
            screen.getByText(/React: 0/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Vue: 0/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Angular: 0/i)
        ).toBeInTheDocument();
    });

    test("react vote increments", () => {
        render(<PollDashboard />);

        fireEvent.click(
            screen.getByText("Vote React")
        );

        expect(
            screen.getByText(/React: 1/i)
        ).toBeInTheDocument();
    });

    test("vue vote increments", () => {
        render(<PollDashboard />);

        fireEvent.click(
            screen.getByText("Vote Vue")
        );

        expect(
            screen.getByText(/Vue: 1/i)
        ).toBeInTheDocument();
    });

    test("multiple votes accumulate", () => {
        render(<PollDashboard />);

        const btn =
            screen.getByText("Vote React");

        fireEvent.click(btn);
        fireEvent.click(btn);
        fireEvent.click(btn);

        expect(
            screen.getByText(/React: 3/i)
        ).toBeInTheDocument();
    });

    test("reset votes returns all values to zero", () => {
        render(<PollDashboard />);

        fireEvent.click(
            screen.getByText("Vote React")
        );

        fireEvent.click(
            screen.getByText("Reset Votes")
        );

        expect(
            screen.getByText(/React: 0/i)
        ).toBeInTheDocument();
    });

});