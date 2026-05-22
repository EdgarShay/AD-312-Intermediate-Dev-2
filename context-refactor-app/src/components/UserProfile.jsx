import { useContext } from "react";

import { UserContext } from "../context/UserContext";

function UserProfile() {

    const { user }
        =
        useContext(UserContext);

    return (

        <div className="profile-card">

            <h2>

                User Profile

            </h2>

            <div className="user-info">

                <p>

                    <strong>Name:</strong>

                    {user.name}

                </p>

                <p>

                    <strong>Email:</strong>

                    {user.email}

                </p>

                <p>

                    <strong>Theme:</strong>

                    {user.themePreference}

                </p>

            </div>

        </div>

    );

}

export default UserProfile