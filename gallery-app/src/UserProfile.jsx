import { useState } from "react";
import "./UserProfile.css";

export default function UserProfile() {
    const [userProfile, setUserProfile] = useState({
        name: "John Doe",
        email: "john@example.com",
        address: {
            street: "123 Main St",
            city: "Atlanta",
            country: "USA",
        },
    });

    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const updateAddress = () => {
        setUserProfile((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                street: street || prev.address.street,
                city: city || prev.address.city,
                country: country || prev.address.country,
            },
        }));

        // clear inputs
        setStreet("");
        setCity("");
        setCountry("");
    };

    return (
        <div className="profile">
            <h2>User Profile</h2>

            <h3>Update Address</h3>

            <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
            />

            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />

            <button onClick={updateAddress}>Update Address</button>

            <h3>Current Profile</h3>
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <p><strong>Street:</strong> {userProfile.address.street}</p>
            <p><strong>City:</strong> {userProfile.address.city}</p>
            <p><strong>Country:</strong> {userProfile.address.country}</p>
        </div>
    );
}