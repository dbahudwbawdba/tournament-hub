import { useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';

export default function Home() {
  const { data: session } = useSession();

  const tournaments = [
    { id: 1, title: "Siege Station Open #12", prize: "€50", teams: "12/16", status: "Live", type: "5v5 Bomb" },
    { id: 2, title: "Community Clash: Gold Only", prize: "Skins", teams: "4/8", status: "Inschrijven", type: "1v1 Aim" },
  ];

  if (!session) {
    return (
      <div className="min-h-screen bg-siege-dark flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-siege-accent rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-black text-black">SS</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Siege Station</h1>
          <button onClick={() => signIn("discord")} className="bg-[#5865F2] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">
            Login met Discord
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-siege-dark text-white font-sans">
      <Head><title>Siege Station Dashboard</title></Head>
      <nav className="border-b border-white/5 bg-siege-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-siege-accent font-black text-xl uppercase tracking-tighter">Siege</span>
            <span className="font-light text-xl uppercase tracking-tighter text-white">Station</span>
          </div>
          <div className="flex items-center gap-4 bg-siege-card p-1.5 pr-4 rounded-full border border-white/5">
            <img src={session.user?.image} className="w-8 h-8 rounded-full border border-siege-accent" />
            <span className="text-sm font-bold">{session.user?.name}</span>
            <button onClick={() => signOut()} className="text-[10px] uppercase text-gray-500 hover:text-white ml-2">Uitloggen</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto w-full px-6 py-12">
        <h2 className="text-3xl font-black mb-8">Actieve Toernooien</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((t) => (
            <div key={t.id} className="bg-siege-card border border-white/5 rounded-2xl overflow-hidden hover:border-siege-accent/50 transition-all cursor-pointer">
              <div className="h-32 bg-gradient-to-br from-siege-accent/20 to-black flex items-center justify-center font-black text-2xl text-siege-accent/30 uppercase tracking-widest">{t.type}</div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-siege-accent bg-siege-accent/10 px-2 py-1 rounded mb-2 inline-block">{t.status}</span>
                <h3 className="text-xl font-bold mb-4">{t.title}</h3>
                <button className="w-full bg-white text-black font-black py-3 rounded-xl hover:bg-siege-accent transition-colors">Details</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
