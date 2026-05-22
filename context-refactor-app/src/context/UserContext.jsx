import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [user] = useState({

        name: "John Doe",
        email: "john@example.com",
        themePreference: "Dark Mode"

    });

    return (

        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>

    );
}