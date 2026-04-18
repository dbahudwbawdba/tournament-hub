import { useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';

export default function Home() {
  const { data: session } = useSession();

  // Inlogscherm
  if (!session) {
    return (
      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100-vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', color: 'white' }}>
        <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px', padding: '20px' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: '#ffa500', borderRadius: '20px', margin: '0 auto 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(255,165,0,0.2)' }}>
            <span style={{ fontSize: '32px', fontWeight: '900', color: 'black' }}>SS</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 10px', tracking: '-2px', textTransform: 'uppercase' }}>Siege Station</h1>
          <p style={{ color: '#666', marginBottom: '40px', fontWeight: '500' }}>Tournament Security Verified</p>
          <button 
            onClick={() => signIn("discord")}
            style={{ width: '100%', backgroundColor: '#5865F2', color: 'white', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer transition: 0.2s' }}
          >
            Login with Discord
          </button>
        </div>
      </div>
    );
  }

  // Dashboard (Screenshot look)
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <Head><title>Siege Station | Dashboard</title></Head>
      
      {/* Navigatie */}
      <nav style={{ borderBottom: '1px solid #222', padding: '0 24px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)', sticky: 'top' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ color: '#ffa500', fontWeight: '900', fontSize: '20px' }}>SIEGE</span>
          <span style={{ fontWeight: '300', fontSize: '20px' }}>STATION</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#121212', padding: '6px 16px 6px 6px', borderRadius: '50px', border: '1px solid #222' }}>
          <img src={session.user?.image} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ffa500' }} />
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{session.user?.name}</span>
          <button onClick={() => signOut()} style={{ background: 'none', border: 'none', color: '#555', fontSize: '10px', cursor: 'pointer', marginLeft: '8px', textTransform: 'uppercase' }}>Log out</button>
        </div>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '40px' }}>Active <span style={{ color: '#ffa500' }}>Tournaments</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ backgroundColor: '#121212', borderRadius: '32px', overflow: 'hidden', border: '1px solid #222' }}>
              <div style={{ height: '140px', background: 'linear-gradient(135deg, rgba(255,165,0,0.1) 0%, #000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'rgba(255,165,0,0.1)', fontWeight: '900', fontSize: '40px' }}>5V5 BOMB</span>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{ color: '#ffa500', fontSize: '10px', fontWeight: '900', backgroundColor: 'rgba(255,165,0,0.1)', padding: '4px 8px', borderRadius: '4px' }}>LIVE</span>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '16px 0 24px' }}>Open Cup #{i}04</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ backgroundColor: '#000', padding: '16px', borderRadius: '16px', border: '1px solid #222' }}>
                    <p style={{ fontSize: '10px', color: '#555', fontWeight: '900', margin: '0 0 4px' }}>PRIZE</p>
                    <p style={{ fontSize: '18px', fontWeight: '900' }}>€100</p>
                  </div>
                  <div style={{ backgroundColor: '#000', padding: '16px', borderRadius: '16px', border: '1px solid #222' }}>
                    <p style={{ fontSize: '10px', color: '#555', fontWeight: '900', margin: '0 0 4px' }}>TEAMS</p>
                    <p style={{ fontSize: '18px', fontWeight: '900', color: '#ffa500' }}>12/16</p>
                  </div>
                </div>
                <button style={{ width: '100%', backgroundColor: 'white', color: 'black', padding: '16px', borderRadius: '16px', border: 'none', fontWeight: '900', cursor: 'pointer', textTransform: 'uppercase' }}>
                  Join Tournament
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
