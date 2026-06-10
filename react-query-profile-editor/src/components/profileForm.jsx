import { useEffect } from "react";

import { useForm } from "react-hook-form";

import {
    useMutation,
    useQuery,
    useQueryClient
} from "@tanstack/react-query";

import {
    getProfile,
    updateProfile
} from "../api/profileApi";

export default function ProfileForm() {

    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {
            errors,
            isDirty
        }
    } = useForm();

    const {
        data,
        isLoading
    } = useQuery({
        queryKey: ["userProfile"],
        queryFn: getProfile
    });

    useEffect(() => {
        if (data) {
            reset(data);
        }
    }, [data, reset]);

    const mutation = useMutation({
        mutationFn: updateProfile,

        onSuccess: (updatedData) => {

            queryClient.invalidateQueries({
                queryKey: ["userProfile"]
            });

            reset(updatedData);
        },

        onError: (error) => {

            setError("email", {
                type: "server",
                message:
                    error.response?.data?.message ||
                    "Server Error"
            });
        }
    });

    const onSubmit = (formData) => {
        mutation.mutate(formData);
    };

    if (isLoading) {
        return <div>Loading Profile...</div>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Username</label>

            <input
                {...register("username", {
                    required: "Username required"
                })}
            />

            <p>{errors.username?.message}</p>

            <label>Email</label>

            <input
                {...register("email", {
                    required: "Email required",
                    pattern: {
                        value:
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:
                            "Invalid Email"
                    }
                })}
            />

            <p>{errors.email?.message}</p>

            <label>Bio</label>

            <textarea
                rows="4"
                {...register("bio")}
            />

            <label>
                <input
                    type="checkbox"
                    {...register("notifications")}
                />
                Enable Notifications
            </label>

            <button
                disabled={
                    !isDirty ||
                    mutation.isPending
                }
            >
                {
                    mutation.isPending
                        ? "Saving..."
                        : "Save Profile"
                }
            </button>

        </form>
    );
}