import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setFocus,
        setValue,
        formState: { errors, isSubmitting, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
            terms: false,
        },
    });

    const password = watch("password");
    const formData = watch();

    // Auto focus
    useEffect(() => {
        setFocus("fullName");
    }, [setFocus]);

    // Save draft
    useEffect(() => {
        localStorage.setItem("formDraft", JSON.stringify(formData));
    }, [formData]);

    // Load draft
    useEffect(() => {
        const saved = localStorage.getItem("formDraft");
        if (saved) {
            const data = JSON.parse(saved);
            Object.keys(data).forEach((key) => setValue(key, data[key]));
        }
    }, [setValue]);

    const onSubmit = async (data) => {
        console.log(data);

        await new Promise((res) => setTimeout(res, 2000));

        alert("Registration Successful!");

        reset();
        localStorage.removeItem("formDraft");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* FULL NAME */}
            <label>Full Name</label>
            <input
                {...register("fullName", {
                    required: "Full Name is required",
                    minLength: { value: 3, message: "Minimum 3 characters" },
                })}
            />
            <p>{errors.fullName?.message}</p>

            {/* EMAIL */}
            <label>Email</label>
            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                    },
                })}
            />
            <p>{errors.email?.message}</p>

            {/* PASSWORD */}
            <label>Password</label>
            <input
                type="password"
                {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Min 8 characters" },
                    validate: (value) =>
                        /[A-Z]/.test(value) &&
                        /[a-z]/.test(value) &&
                        /[0-9]/.test(value) ||
                        "Must include uppercase, lowercase, and number",
                })}
            />
            <p>{errors.password?.message}</p>

            {/* CONFIRM PASSWORD */}
            <label>Confirm Password</label>
            <input
                type="password"
                {...register("confirmPassword", {
                    required: "Confirm password required",
                    validate: (value) =>
                        value === password || "Passwords do not match",
                })}
            />
            <p>{errors.confirmPassword?.message}</p>

            {/* ROLE */}
            <label>Role</label>
            <select
                {...register("role", {
                    required: "Please select a role",
                })}
            >
                <option value="">Select a role...</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="pm">Product Manager</option>
            </select>
            <p>{errors.role?.message}</p>

            {/* TERMS */}
            <label>
                <input
                    type="checkbox"
                    {...register("terms", {
                        required: "You must accept terms",
                    })}
                />
                I agree to terms
            </label>
            <p>{errors.terms?.message}</p>

            {/* BUTTON */}
            <button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Registering..." : "Register"}
            </button>

        </form>
    );
}