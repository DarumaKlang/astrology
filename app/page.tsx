// app/page.tsx
import ClientInput from "@/components/ClientInput";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950">
            <ClientInput />
        </main>
    );
}