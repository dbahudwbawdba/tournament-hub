export default function Tournaments() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white', padding: '50px', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '40px' }}>ACTIVE <span style={{ color: '#ffa500' }}>TOURNAMENTS</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {/* Hier komen de toernooien te staan */}
        <div style={{ backgroundColor: '#121212', padding: '30px', borderRadius: '25px', border: '1px solid #222' }}>
          <span style={{ color: '#ffa500', fontSize: '10px', fontWeight: '900' }}>LIVE</span>
          <h3 style={{ fontSize: '20px', margin: '10px 0' }}>Siege Station Open #01</h3>
          <button style={{ width: '100%', padding: '12px', marginTop: '20px', borderRadius: '10px', border: 'none', fontWeight: 'bold' }}>Details</button>
        </div>
      </div>
    </div>
  );
}
