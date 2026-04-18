
import { useState } from 'react';
import { useSession } from "next-auth/react";

export default function Staff() {
  const { data: session } = useSession();
  const [form, setForm] = useState({ title: '', category: '5v5 Bomb', prize: '' });

  // BEVEILIGING: Alleen toegankelijk als je bent ingelogd
  if (!session) return <div style={{ color: 'white', padding: '50px', textAlign: 'center' }}>Please login first.</div>;

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white', padding: '50px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#121212', padding: '40px', borderRadius: '30px', border: '1px solid #222' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '30px' }}>CREATE <span style={{ color: '#ffa500' }}>TOURNAMENT</span></h2>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '10px', color: '#555', fontWeight: '900', marginBottom: '8px' }}>TITLE</label>
          <input type="text" style={{ width: '100%', padding: '15px', backgroundColor: '#000', border: '1px solid #222', borderRadius: '12px', color: 'white' }} placeholder="Tournament Name" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '10px', color: '#555', fontWeight: '900', marginBottom: '8px' }}>CATEGORY</label>
            <select style={{ width: '100%', padding: '15px', backgroundColor: '#000', border: '1px solid #222', borderRadius: '12px', color: 'white' }}>
              <option>5v5 Bomb</option>
              <option>1v1 Aim</option>
              <option>2v2 Duo</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '10px', color: '#555', fontWeight: '900', marginBottom: '8px' }}>PRIZE</label>
            <input type="text" style={{ width: '100%', padding: '15px', backgroundColor: '#000', border: '1px solid #222', borderRadius: '12px', color: 'white' }} placeholder="e.g. €100" />
          </div>
        </div>

        <button style={{ width: '100%', padding: '20px', backgroundColor: '#ffa500', color: 'black', fontWeight: '900', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>PUBLISH TOURNAMENT</button>
      </div>
    </div>
  );
}
