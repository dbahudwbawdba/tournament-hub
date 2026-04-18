import { useSession, signIn } from "next-auth/react";
import Head from 'next/head';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-siege-dark text-white flex flex-col items-center justify-center relative overflow-hidden">
      <Head>
        <title>Siege Station | Jynxzi Tournaments</title>
      </Head>

      {/* Achtergrond Gloed */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-siege-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="relative z-10 text-center px-6">
        {/* Logo Sectie */}
        <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 bg-black border-2 border-siege-accent rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,165,0,0.2)]">
            <span className="text-4xl font-black text-white tracking-tighter">J</span>
          </div>
        </div>

        {/* Titels */}
        <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-tight">
          Jynxzi
        </h1>
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-siege-accent tracking-tight uppercase">
          Tournament Hub
        </h2>
        
        <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg font-medium">
          The official tournament platform for the Jynxzi community.
        </p>

        {/* Knoppen */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => signIn("discord")}
            className="px-8 py-4 bg-siege-blue hover:bg-siege-blue/80 text-white rounded-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg"
          >
            <i className="fab fa-discord text-xl"></i>
            Login with Discord
          </button>
          
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all backdrop-blur-sm">
            View Tournaments
          </button>
        </div>
      </main>

      {/* Footer / Status */}
      <div className="absolute bottom-8 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
        Powered by Siege Station Security
      </div>
    </div>
  );
}
