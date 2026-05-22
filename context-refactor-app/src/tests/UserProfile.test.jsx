import { render, screen } from "@testing-library/react";

import UserProfile from "../components/UserProfile";

import { UserProvider } from "../context/UserContext";

describe("User Profile Tests", () => {

    test("renders user name", () => {

        render(
            <UserProvider>
                <UserProfile />
            </UserProvider>
        );

        expect(
            screen.getByText(/John Doe/i)
        ).toBeTruthy();

    });

    test("renders email", () => {

        render(
            <UserProvider>
                <UserProfile />
            </UserProvider>
        );

        expect(
            screen.getByText(/john@example.com/i)
        ).toBeTruthy();

    });

    test("renders theme", () => {

        render(
            <UserProvider>
                <UserProfile />
            </UserProvider>
        );

        expect(
            screen.getByText(/Dark Mode/i)
        ).toBeTruthy();

    });

});