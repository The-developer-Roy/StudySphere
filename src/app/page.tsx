"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.replace("/dashboard"); // redirect logged-in user
        }
    }, [status, router]);

    if (status === "loading") return <p>Loading...</p>;

    return (
        <main>
            {/* your public landing content */}
            <h1>Welcome to StudySphere!</h1>
        </main>
    );
}
