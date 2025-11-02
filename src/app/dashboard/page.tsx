"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
    const { session, status, logout } = useAuth();

    if (status === "loading") return <p>Loading...</p>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
                <h1 className="text-2xl font-semibold mb-4">
                    Welcome {session?.user?.name || "User"} 👋
                </h1>

                <p className="mb-6 text-gray-700">
                    Logged in as <strong>{session?.user?.email}</strong>
                </p>

                <button
                    onClick={logout}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
