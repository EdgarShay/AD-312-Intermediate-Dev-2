import axios from "axios";

const API_URL = "http://localhost:3001/profile";

export const getProfile = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateProfile = async (profile) => {
    if (profile.email === "conflict@example.com") {
        throw {
            response: {
                data: {
                    message: "Email already exists"
                }
            }
        };
    }

    const response = await axios.put(API_URL, profile);

    return response.data;
};