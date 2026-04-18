import { useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';

export default function Home() {
  const { data: session } = useSession();

  // Dit is wat de speler ziet als hij NIET is ingelogd
  if (!session) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 font-sans">
        <div className="text-center w-full max-w-sm">
          {/* Het Logo blokje */}
          <div className="w-20 h-20 bg-[#ffa500] rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(255,165,0,0.2)]">
            <span className="text-3xl font-black text-black uppercase">SS</span>
          </div>
          
          <h1 className="text-5xl font-black text-white mb-2 tracking-tighter uppercase">Siege</h1>
          <h2 className="text-4xl font-light text-[#ffa500] mb-8 tracking-widest uppercase">Station</h2>
          
          <button 
            onClick={() => signIn("discord")}
            className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg active:scale-95"
          >
            Login met Discord
          </button>
          
          <p className="mt-6 text-gray-600 text-[10px] uppercase tracking-[0.2em]">Tournament Security Verified</p>
        </div>
      </div>
    );
  }

  // Dit is het Dashboard (als je bent ingelogd)
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Head><title>Siege Station | Dashboard</title></Head>

      {/* Navigatie balk */}
      <nav className="border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ffa500] font-black text-xl uppercase tracking-tighter">Siege</span>
            <span className="font-light text-xl uppercase tracking-tighter">Station</span>
          </div>
          
          <div className="flex items-center gap-4 bg-[#121212] p-1.5 pr-4 rounded-full border border-white/5 shadow-inner">
            <img src={session.user?.image} className="w-8 h-8 rounded-full border border-[#ffa500]" alt="Avatar" />
            <span className="text-sm font-bold">{session.user?.name}</span>
            <button onClick={() => signOut()} className="text-[10px] uppercase text-gray-500 hover:text-white ml-2 transition-colors">Log uit</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto w-full px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-black mb-2 tracking-tight">Welkom terug, <span className="text-[#ffa500]">Operator</span>.</h2>
          <p className="text-gray-400 font-medium">Klaar voor de volgende cup?</p>
        </div>

        {/* Toernooi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#121212] border border-white/5 rounded-[2rem] overflow-hidden group hover:border-[#ffa500]/50 transition-all cursor-pointer shadow-2xl">
              <div className="h-40 bg-gradient-to-br from-[#ffa500]/10 to-black flex items-center justify-center border-b border-white/5">
                <span className="text-[#ffa500]/20 font-black text-4xl uppercase tracking-widest group-hover:scale-110 transition-transform">5v5 BOMB</span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold leading-tight">Siege Station<br/>Open Cup #{i}02</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/50 p-4 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Prijzenpot</p>
                    <p className="text-xl font-black text-white">€100</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Status</p>
                    <p className="text-xl font-black text-[#ffa500]">LIVE</p>
                  </div>
                </div>
                <button className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-[#ffa500] transition-all uppercase tracking-tighter">
                  Deelnemen
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
