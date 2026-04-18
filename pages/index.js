import { useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';

export default function Home() {
  const { data: session } = useSession();

  // Test data voor toernooien (later uit DB halen)
  const tournaments = [
    { id: 1, title: "Open Cup #12", prize: "€100", teams: "12/16", status: "LIVE", type: "5v5Bomb" },
    { id: 2, title: "Community Clash", prize: "Skins", teams: "4/8", status: "REGISTRATION", type: "1v1Aim" },
    { id: 3, title: "Weekend Warrior", prize: "€50", teams: "0/32", status: "UPCOMING", type: "5v5Bomb" },
  ];

  if (!session) {
    return (
      <div className="min-h-screen bg-siege-dark flex items-center justify-center px-6">
        <Head><title>Login | Siege Station Tournaments</title></Head>
        <div className="text-center w-full max-w-sm">
          <div className="w-20 h-20 bg-siege-accent rounded-3xl mx-auto mb-10 flex items-center justify-center shadow-2xl shadow-siege-accent/10">
            <span className="text-4xl font-black text-black">SS</span>
          </div>
          <h1 className="text-5xl font-black text-white mb-3 tracking-tighter uppercase">Siege Station</h1>
          <p className="text-gray-400 mb-10 text-lg font-medium">Tournament Security Verified</p>
          <button 
            onClick={() => signIn("discord")}
            className="w-full bg-siege-blue hover:bg-siege-blue-hover text-white py-4.5 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95"
          >
            Login with Discord
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-siege-dark text-white font-sans antialiased flex flex-col relative overflow-hidden">
      <Head><title>Dashboard | Siege Station</title></Head>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-siege-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <nav className="border-b border-white/5 bg-siege-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-siege-accent font-black text-xl tracking-tighter">SIEGE</span>
            <span className="font-light text-xl">STATION</span>
          </div>
          <div className="flex items-center gap-4 bg-siege-card p-1.5 pr-4 rounded-full border border-white/5">
            <img src={session.user?.image} className="w-8 h-8 rounded-full border border-siege-accent" />
            <span className="text-sm font-bold">{session.user?.name}</span>
            <button onClick={() => signOut()} className="text-[10px] uppercase text-gray-500 hover:text-white transition-colors ml-2">Log out</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto w-full px-6 py-12 flex-grow relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl font-black mb-2 tracking-tight">Welkom terug, <span className="text-siege-accent">Operator</span>.</h2>
          <p className="text-gray-400 font-medium">Ready for the next cup?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((t) => (
            <div key={t.id} className="bg-siege-card border border-white/5 rounded-3xl overflow-hidden group hover:border-siege-accent/50 transition-all cursor-pointer shadow-2xl">
              <div className="h-40 bg-gradient-to-br from-siege-accent/10 to-black flex items-center justify-center border-b border-white/5">
                <span className="text-siege-accent/20 font-black text-4xl uppercase tracking-widest">{t.type}</span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold leading-tight">Siege Station<br/>Open Cup #{t.id}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Prize</p>
                    <p className="text-xl font-black text-white">{t.prize}</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Teams</p>
                    <p className="text-xl font-black text-siege-accent">{t.teams}</p>
                  </div>
                </div>
                <button className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-siege-accent transition-all uppercase tracking-tighter">Details</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
