import { useState } from "react";
import { useImmer } from "use-immer";

export default function UserProfileWithImmer() {
    const [userProfile, updateUserProfile] = useImmer({
        name: "",
        email: "",
        contactDetails: {
            phone: "",
            address: ""
        },
        preferences: {
            newsletter: false,
            notifications: false
        }
    });

    const [animate, setAnimate] = useState(false);

    // BASIC INFO
    const handleChange = (field, value) => {
        triggerAnimation();
        updateUserProfile(draft => {
            draft[field] = value;
        });
    };

    // CONTACT
    const updateContactDetails = (field, value) => {
        triggerAnimation();
        updateUserProfile(draft => {
            draft.contactDetails[field] = value;
        });
    };

    // TOGGLE
    const toggleNewsletter = () => {
        triggerAnimation();
        updateUserProfile(draft => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    };

    // ANIMATION TRIGGER
    const triggerAnimation = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
    };

    return (
        <div className="container">

            {/* HEADER */}
            <div className={`profile-header ${animate ? "fade" : ""}`}>
                <div className="avatar">
                    {userProfile.name ? userProfile.name[0].toUpperCase() : "U"}
                </div>
                <h2>{userProfile.name || "Your Name"}</h2>
                <p>{userProfile.email || "your@email.com"}</p>
            </div>

            {/* BASIC INFO */}
            <div className="section">
                <h3>Basic Info</h3>

                <input
                    placeholder="Name"
                    value={userProfile.name}
                    onChange={e => handleChange("name", e.target.value)}
                />

                <input
                    placeholder="Email"
                    value={userProfile.email}
                    onChange={e => handleChange("email", e.target.value)}
                />
            </div>

            {/* CONTACT */}
            <div className="section">
                <h3>Contact Details</h3>

                <input
                    placeholder="Phone"
                    value={userProfile.contactDetails.phone}
                    onChange={e =>
                        updateContactDetails("phone", e.target.value)
                    }
                />

                <input
                    placeholder="Address"
                    value={userProfile.contactDetails.address}
                    onChange={e =>
                        updateContactDetails("address", e.target.value)
                    }
                />
            </div>

            {/* PREFERENCES */}
            <div className="section">
                <h3>Preferences</h3>

                <label className="toggle">
                    <input
                        type="checkbox"
                        checked={userProfile.preferences.newsletter}
                        onChange={toggleNewsletter}
                    />
                    <span className="slider"></span>
                    Subscribe to Newsletter
                </label>
            </div>

            {/* LIVE DATA */}
            <div className={`section ${animate ? "fade" : ""}`}>
                <h3>Live Data</h3>
                <pre>{JSON.stringify(userProfile, null, 2)}</pre>
            </div>

        </div>
    );
}