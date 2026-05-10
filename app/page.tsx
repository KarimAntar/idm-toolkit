"use client";

import { useState } from "react";

const VERSION = "1.0";
const DOWNLOAD_URL = `/IDM_Toolkit_v${VERSION}.exe`;

const features = [
  {
    icon: "❄️",
    title: "Freeze Trial",
    desc: "Lock your IDM trial period so it never expires — keep using IDM free indefinitely.",
  },
  {
    icon: "⚡",
    title: "Activate",
    desc: "Register IDM instantly with a valid serial key injection — no manual entry needed.",
  },
  {
    icon: "🔄",
    title: "Reset & Clean",
    desc: "Wipe registry traces, reset activation state, and restore IDM to factory defaults.",
  },
  {
    icon: "🛡️",
    title: "Network Protection",
    desc: "Block IDM tracking servers via hosts file and firewall rules to prevent telemetry.",
  },
  {
    icon: "🕵️",
    title: "Anti-Detection",
    desc: "Bypass IDM's detection mechanisms with the guided 4-step Anti-Detection Wizard.",
  },
  {
    icon: "💾",
    title: "Backup & Restore",
    desc: "Export your IDM registry settings to a timestamped .reg backup at any time.",
  },
];

export default function Home() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
    window.location.href = DOWNLOAD_URL;
  };

  return (
    <main className="min-h-screen bg-[#0d1515] text-white">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-white/5 bg-[#0d1515]/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-sm">
              ⬇
            </div>
            <span className="font-semibold text-[#00f0ff] tracking-tight">IDM Toolkit</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#download" className="hover:text-white transition-colors">Download</a>
            <span className="px-2 py-0.5 rounded border border-[#00f0ff]/30 text-[#00f0ff] text-xs">
              v{VERSION}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f0ff]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f0ff]/20 bg-[#00f0ff]/5 text-[#00f0ff] text-xs mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            Version {VERSION} — Now Available
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            IDM Utility{" "}
            <span className="text-[#00f0ff]">Toolkit</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            The all-in-one utility for Internet Download Manager. Freeze trials,
            activate, reset, and protect your IDM setup — all from one clean interface.
          </p>
          <div id="download" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00f0ff] text-[#0d1515] font-semibold hover:bg-[#00d4e0] transition-colors disabled:opacity-60 text-sm"
            >
              {downloading ? "Starting…" : `⬇ Download v${VERSION}`}
            </button>
            <span className="text-white/30 text-xs">
              Windows 10/11 · Free · No account required
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-3">Everything you need</h2>
          <p className="text-white/40 text-center text-sm mb-12">Six powerful tools in one compact app</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#00f0ff]/20 hover:bg-[#00f0ff]/[0.03] transition-all"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-medium mb-1.5">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-white/25 text-xs">
        <p>© 2026 Karim Antar · IDM Utility Toolkit v{VERSION}</p>
      </footer>
    </main>
  );
}
