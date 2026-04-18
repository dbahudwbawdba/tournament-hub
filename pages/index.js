import { useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';

export default function Home() {
  const { data: session } = useSession();

  // Voorbeeld data voor toernooien
  const tournaments = [
    { id: 1, title: "Siege Station Open #12", prize: "€50", teams: "12/16", status: "Live", type: "5v5 Bomb" },
    { id: 2, title: "Community Clash: Gold Only", prize: "Skins", teams: "4/8", status: "Inschrijven", type: "1v1 Aim" },
    { id: 3, title: "Weekend Warriors Cup", prize: "€100", teams: "0/32", status: "Binnenkort", type: "5v5 Bomb" },
  ];

  if (!session) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#ffa500] rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-black text-black">SS</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Siege Station</h1>
          <p className="text-gray-400 mb-8 font-medium">Log in met Discord om deel te nemen.</p>
          <button 
            onClick={() => signIn("discord")}
            className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white py-4 rounded-xl font-bold transition-all shadow-xl"
          >
            Login met Discord
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans">
      <Head>
        <title>Dashboard | Siege Station</title>
      </Head>

      <nav className="border-b border-white/5 bg-[#0a0a0a]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-[#ffa500] font-black text-xl tracking-tighter uppercase">Siege</span>
              <span className="font-light text-xl tracking-tighter uppercase">Station</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-400">
              <a href="#" className="text-white border-b-2 border-[#ffa500] pb-1">Toernooien</a>
              <a href="#" className="hover:text-white transition-colors">Teams</a>
              <a href="#" className="hover:text-white transition-colors">Staff</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-[#121212] p-1.5 pr-4 rounded-full border border-white/5">
            <img src={session.user?.image} className="w-8 h-8 rounded-full border border-[#ffa500]" alt="Avatar" />
            <span className="text-sm font-bold">{session.user?.name}</span>
            <button onClick={() => signOut()} className="text-[10px] uppercase text-gray-500 hover:text-white ml-2">Uitloggen</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto w-full px-6 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-2 tracking-tight">Welkom terug, Operator.</h2>
          <p className="text-gray-400">Er zijn momenteel <span className="text-[#ffa500]">3 actieve toernooien</span>.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((t) => (
            <div key={t.id} className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden group hover:border-[#ffa500]/50 transition-all cursor-pointer">
              <div className="h-32 bg-gradient-to-br from-[#ffa500]/20 to-black flex items-center justify-center font-black text-2xl uppercase tracking-widest text-[#ffa500]/30">
                {t.type}
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffa500] bg-[#ffa500]/10 px-2 py-1 rounded mb-2 inline-block">{t.status}</span>
                <h3 className="text-xl font-bold mb-4">{t.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Prijs</p>
                    <p className="text-lg font-black">{t.prize}</p>
                  </div>
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Teams</p>
                    <p className="text-lg font-black">{t.teams}</p>
                  </div>
                </div>
                <button className="w-full bg-white text-black font-black py-3 rounded-xl hover:bg-[#ffa500] transition-colors">Details</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
