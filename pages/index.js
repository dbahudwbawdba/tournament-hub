import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  // Voorkomt de crash tijdens het laden op Vercel
  if (status === "loading") return <div className="bg-[#0a0a0a] min-h-screen" />;

  return (
    // ... rest van je vette Jynxzi-code hier ...
    <div className="bg-siege-dark min-h-screen text-white">
       <h1 className="text-siege-accent">SIEGE STATION</h1>
       {/* Je content */}
    </div>
  );
}
