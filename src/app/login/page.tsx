"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const res = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/dashboard",
        });
        if (res?.ok) {
            // ✅ replace instead of push
            router.replace("/dashboard");
        } else {
            console.log(("Error in api"));
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col w-80 space-y-4">
                <h2 className="text-2xl font-semibold text-center">Login</h2>
                <input
                    className="border p-2 rounded"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border p-2 rounded"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-blue-500 text-white py-2 rounded" type="submit">
                    Sign In
                </button>
            </form>
        </div>
    );
}
