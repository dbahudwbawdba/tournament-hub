import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  // Voeg "|| {}" toe om te voorkomen dat de build crasht als useSession undefined is
  const { data: session } = useSession() || {};

  return (
    <div style={{ background: "#0b0f1a", color: "white", minHeight: "100vh", padding: "40px" }}>
      <h1>Tournament Hub</h1>

      {!session ? (
        <button onClick={() => signIn("discord")}>
          Login with Discord
        </button>
      ) : (
        <>
          <p>Logged in as {session.user?.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </div>
  );
}
