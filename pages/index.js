import { useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <Head><title>Siege Station | Home</title></Head>

      <nav style={{ borderBottom: '1px solid #222', padding: '0 24px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#ffa500', fontWeight: '900', fontSize: '20px' }}>SIEGE</span>
            <span style={{ fontWeight: '300', fontSize: '20px' }}>STATION</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <Link href="/" style={{ color: '#ffa500', textDecoration: 'none' }}>Home</Link>
            <Link href="/tournaments" style={{ color: '#666', textDecoration: 'none' }}>Tournaments</Link>
            <Link href="/leaderboards" style={{ color: '#666', textDecoration: 'none' }}>Leaderboards</Link>
            <Link href="/staff" style={{ color: '#666', textDecoration: 'none' }}>Staff Panel</Link>
          </div>
        </div>
        <div>
          {!session ? (
            <button onClick={() => signIn("discord")} style={{ backgroundColor: '#5865F2', color: 'white', padding: '10px 20px', borderRadius: '50px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Login with Discord</button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={session.user?.image} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ffa500' }} />
              <button onClick={() => signOut()} style={{ background: 'none', border: 'none', color: '#555', fontSize: '10px', cursor: 'pointer' }}>LOGOUT</button>
            </div>
          )}
        </div>
      </nav>

      <main style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '900', margin: 0, tracking: '-3px' }}>THE ULTIMATE</h1>
        <h1 style={{ fontSize: '72px', fontWeight: '900', margin: 0, color: '#ffa500' }}>COMPETITION HUB</h1>
        <p style={{ color: '#666', fontSize: '18px', margin: '30px 0' }}>Join high-stakes tournaments and climb the global leaderboards.</p>
        <Link href="/tournaments" style={{ backgroundColor: 'white', color: 'black', padding: '15px 40px', borderRadius: '15px', textDecoration: 'none', fontWeight: '900', display: 'inline-block' }}>VIEW TOURNAMENTS</Link>
      </main>
    </div>
  );
}
