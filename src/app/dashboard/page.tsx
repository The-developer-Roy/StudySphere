"use client";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
    const { session, status } = useAuth();

    if (status === "loading") return <p>Loading...</p>;

    return <h1>Welcome {session?.user?.name}</h1>;
}
