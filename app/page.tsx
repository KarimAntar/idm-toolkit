"use client";
import { useState } from "react";
import Image from "next/image";

const VERSION = "1.0";
const GITHUB_URL = "https://github.com/KarimAntar/idm-toolkit";
const DOWNLOAD_URL = `/IDM_Toolkit_v${VERSION}.exe`;

const NAV_LINKS = ["Features", "Download", "Changelog"];

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
      </svg>
    ),
    title: "Freeze Trial",
    desc: "Lock your IDM trial period permanently. Never see the expiry countdown again.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Activate",
    desc: "Inject a valid serial key instantly. No manual entry, no hassle.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Reset & Clean",
    desc: "Wipe all registry traces and restore IDM to a clean factory state.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Network Protection",
    desc: "Block IDM telemetry servers via hosts file and firewall rules.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: "Anti-Detection",
    desc: "4-step wizard to bypass IDM's detection and fingerprinting systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Backup & Restore",
    desc: "Export timestamped .reg backups of your IDM configuration anytime.",
  },
];

const STATS = [
  { value: "6", label: "Built-in Tools" },
  { value: "Win 10/11", label: "Supported OS" },
  { value: "Free", label: "Forever" },
];

const TERMINAL_LINES = [
  { text: "▶ Engine initiated with param /frz…", color: "#00f0ff" },
  { text: "  Checking IDM registry keys…", color: "rgba(232,245,245,0.5)" },
  { text: "  Locating trial timestamp entries…", color: "rgba(232,245,245,0.5)" },
  { text: "  Patching tvfrdt → frozen state…", color: "rgba(232,245,245,0.5)" },
  { text: "✓ Trial frozen successfully.", color: "#00e676" },
];

export default function Home() {
  const [downloading, setDownloading] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2500);
    window.location.href = DOWNLOAD_URL;
  };

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#0d1515", color: "#e8f5f5" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50"
           style={{ backdropFilter: "blur(14px)", background: "rgba(13,21,21,0.85)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0" style={{ boxShadow: "0 0 12px rgba(0,240,255,0.2)" }}>
              <Image src="/app_icon.png" alt="IDM Toolkit" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <span className="font-headline font-semibold tracking-tight" style={{ color: "#00f0ff" }}>IDM Toolkit</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                 className="text-sm transition-colors hover:text-white"
                 style={{ color: "rgba(232,245,245,0.55)" }}>{l}</a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono-label text-xs px-2.5 py-1 rounded"
                  style={{ border: "1px solid rgba(0,240,255,0.35)", color: "#00f0ff", background: "rgba(0,240,255,0.06)" }}>
              v{VERSION}
            </span>
            <button onClick={handleDownload}
                    className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{ background: "#00f0ff", color: "#0d1515", boxShadow: "0 0 20px rgba(0,240,255,0.25)" }}>
              ⬇ Download
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 px-6 text-center overflow-hidden scanlines" id="download">
        {/* Glow blob */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div style={{ width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,240,255,0.055) 0%, transparent 70%)", filter: "blur(40px)" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 font-mono-label text-xs fade-up"
               style={{ border: "1px solid rgba(0,240,255,0.25)", background: "rgba(0,240,255,0.06)", color: "#00f0ff" }}>
            <span className="w-1.5 h-1.5 rounded-full pulse" style={{ background: "#00e676" }} />
            v{VERSION} — Now Available
          </div>

          {/* App Icon */}
          <div className="flex justify-center mb-8 fade-up delay-100">
            <div className="w-24 h-24 rounded-2xl overflow-hidden glow-cyan">
              <Image src="/app_icon.png" alt="IDM Toolkit" width={96} height={96} className="w-full h-full object-cover" priority />
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-bold mb-6 fade-up delay-200"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
            The Ultimate IDM<br />
            <span style={{ color: "#00f0ff" }}>Utility Toolkit</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg mb-10 mx-auto fade-up delay-300"
             style={{ color: "rgba(232,245,245,0.5)", maxWidth: 520, lineHeight: 1.7 }}>
            Freeze trials, activate, reset, and protect your Internet Download Manager setup — all from one beautiful interface.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5 fade-up delay-400">
            <button onClick={handleDownload} disabled={downloading}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all disabled:opacity-60"
                    style={{ background: "#00f0ff", color: "#0d1515", boxShadow: "0 0 32px rgba(0,240,255,0.3)" }}>
              {downloading ? "Starting download…" : `⬇ Download v${VERSION}`}
            </button>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all hover:bg-white/5"
               style={{ border: "1px solid rgba(0,240,255,0.3)", color: "#00f0ff" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              View on GitHub
            </a>
          </div>

          <p className="font-mono-label text-xs" style={{ color: "rgba(232,245,245,0.25)" }}>
            Windows 10/11 · Free · No account required · ~8 MB
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-6 py-6 grid grid-cols-3">
          {STATS.map((s, i) => (
            <div key={s.label} className="text-center" style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div className="font-headline font-bold text-2xl" style={{ color: "#00f0ff" }}>{s.value}</div>
              <div className="font-mono-label text-xs mt-1" style={{ color: "rgba(232,245,245,0.35)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-headline font-bold text-3xl mb-3" style={{ letterSpacing: "-0.02em" }}>Everything you need</h2>
            <p style={{ color: "rgba(232,245,245,0.4)", fontSize: 15 }}>Six powerful tools. One clean interface.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(f => (
              <div key={f.title} className="feature-card rounded-xl p-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                     style={{ background: "rgba(0,240,255,0.09)", color: "#00f0ff" }}>
                  {f.icon}
                </div>
                <h3 className="font-headline font-semibold mb-2" style={{ fontSize: 15 }}>{f.title}</h3>
                <p style={{ color: "rgba(232,245,245,0.45)", fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP PREVIEW ──────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center font-mono-label text-xs mb-6" style={{ color: "rgba(232,245,245,0.3)", letterSpacing: "0.12em" }}>
            BEAUTIFUL. FAST. POWERFUL.
          </p>
          {/* Window mockup */}
          <div className="rounded-xl overflow-hidden glow-cyan-sm"
               style={{ border: "1px solid rgba(0,240,255,0.12)", background: "#0a1212" }}>
            {/* Titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5"
                 style={{ background: "#0d1515", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3">
                <Image src="/app_icon.png" alt="" width={20} height={20} className="rounded" />
                <span className="font-headline font-semibold text-xs" style={{ color: "#00f0ff" }}>IDM UTILITY TOOLKIT</span>
                <span className="font-mono-label text-xs px-1.5 py-0.5 rounded"
                      style={{ background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.2)", color: "#00f0ff", fontSize: 10 }}>
                  Dashboard
                </span>
              </div>
              <div className="flex items-center gap-1">
                {["bg-white/10","bg-white/10","bg-red-500/40"].map((c,i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${c}`} />
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="flex" style={{ minHeight: 320 }}>
              {/* Sidebar */}
              <div className="flex flex-col items-center gap-5 py-5 px-3"
                   style={{ background: "#080f0f", borderRight: "1px solid rgba(255,255,255,0.05)", width: 52 }}>
                {["M4 6h16M4 12h16M4 18h16","M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z","M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88","M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654","M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"].map((p, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
                       className="w-4 h-4"
                       style={{ color: i === 0 ? "#00f0ff" : "rgba(232,245,245,0.25)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={p} />
                  </svg>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col p-5 gap-4">
                {/* Quick action cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[["Freeze Trial","❄","text-blue-300"],["Activate","⚡","text-yellow-300"],["Reset","🔄","text-orange-300"]].map(([t,ic,c]) => (
                    <div key={t} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className={`text-lg ${c}`}>{ic}</span>
                      <div className="text-xs mt-1.5 font-medium" style={{ color: "rgba(232,245,245,0.7)" }}>{t}</div>
                    </div>
                  ))}
                </div>

                {/* Terminal panel */}
                <div className="flex-1 rounded-lg p-3 font-mono-label text-xs"
                     style={{ background: "#060d0d", border: "1px solid rgba(0,240,255,0.1)", minHeight: 120 }}>
                  <div className="flex items-center gap-2 mb-2 pb-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="w-1.5 h-1.5 rounded-full pulse" style={{ background: "#00e676" }} />
                    <span style={{ color: "rgba(232,245,245,0.3)", fontSize: 10, letterSpacing: "0.08em" }}>TERMINAL</span>
                  </div>
                  {TERMINAL_LINES.map((l, i) => (
                    <div key={i} style={{ color: l.color, marginBottom: 2, fontSize: 10 }}>{l.text}</div>
                  ))}
                  <span style={{ color: "#00f0ff", fontSize: 10 }}>█<span className="cursor">_</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ─────────────────────────────────────── */}
      <section id="changelog" className="py-24 px-6" style={{ background: "#111e1e", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline font-bold text-4xl mb-4" style={{ letterSpacing: "-0.02em" }}>
            Ready to take control?
          </h2>
          <p className="mb-10 text-base" style={{ color: "rgba(232,245,245,0.45)", lineHeight: 1.7 }}>
            Download IDM Utility Toolkit and manage your Internet Download Manager like a pro.
          </p>
          <button onClick={handleDownload} disabled={downloading}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-headline font-semibold text-base transition-all disabled:opacity-60"
                  style={{ background: "#00f0ff", color: "#0d1515", boxShadow: "0 0 48px rgba(0,240,255,0.28)" }}>
            {downloading ? "Starting download…" : `⬇ Download v${VERSION} — Free`}
          </button>
          <p className="mt-5 font-mono-label text-xs" style={{ color: "rgba(232,245,245,0.22)" }}>
            Version {VERSION} · Released May 2026 · Windows 10/11 · ~8 MB
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/app_icon.png" alt="IDM Toolkit" width={22} height={22} className="rounded" />
            <span className="font-headline font-medium text-sm" style={{ color: "rgba(232,245,245,0.45)" }}>
              IDM Toolkit · © 2026 Karim Antar
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["Features","Download","GitHub"].map(l => (
              <a key={l} href={l === "GitHub" ? GITHUB_URL : `#${l.toLowerCase()}`}
                 target={l === "GitHub" ? "_blank" : undefined}
                 rel={l === "GitHub" ? "noopener noreferrer" : undefined}
                 className="text-xs transition-colors hover:text-white"
                 style={{ color: "rgba(232,245,245,0.3)" }}>{l}</a>
            ))}
          </div>
          <p className="font-mono-label text-xs" style={{ color: "rgba(232,245,245,0.2)" }}>
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </footer>

    </main>
  );
}
