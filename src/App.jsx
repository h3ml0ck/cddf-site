import React from "react";
import { motion } from "framer-motion";
import { Github, Cpu, Radio, Wifi, Shield } from "lucide-react";

/**
 * Citizen Drone Defense Force — Single-file React site (JSX only)
 * 1) Put your poster image at: public/logo.png
 * 2) Update the GITHUB_URL below
 */
const GITHUB_URL = "https://github.com/h3ml0ck/cddf"; // ← replace me

export default function CddfSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-6 md:px-10">
        <Hero />
        <Overview />
        <Hardware />
        <Software />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/60 border-b border-white/5">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 md:px-10 py-3">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Citizen Drone Defense Force"
            className="h-10 w-10 rounded-full ring-1 ring-white/10 shadow-lg object-cover"
          />
          <span className="font-semibold tracking-wide">
            Citizen Drone Defense Force
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <a href="#overview" className="hover:text-teal-300 transition">
              Overview
            </a>
          </li>
          <li>
            <a href="#hardware" className="hover:text-teal-300 transition">
              Hardware
            </a>
          </li>
          <li>
            <a href="#software" className="hover:text-teal-300 transition">
              Software
            </a>
          </li>
          <li>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition"
            >
              <Github className="h-4 w-4" /> <span>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate pt-10 md:pt-16" aria-label="Hero">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_50%_10%,#000_40%,transparent_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,#0ea5e9_0%,transparent_30%),radial-gradient(circle_at_70%_20%,#22d3ee_0%,transparent_25%)] opacity-20" />
      </div>

      <div className="grid md:grid-cols-[1.2fr,1fr] items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Citizen Drone <span className="text-teal-300">Defense</span> Force
          </h1>
          <p className="text-slate-300 max-w-prose">
            A modern, open-source initiative for community-driven drone
            awareness and airspace safety. Deploy low-cost sensing nodes, share
            telemetry responsibly, and build a real-time picture of your local
            skies.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#overview"
              className="rounded-xl bg-teal-500 px-4 py-2 font-medium text-slate-900 hover:bg-teal-400 transition shadow"
            >
              Learn More
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 font-medium hover:bg-white/10 transition"
            >
              View on GitHub
            </a>
          </div>
          <FeaturePills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <img
              src="/logo.png"
              alt="CDDF Logo"
              className="h-56 w-56 md:h-72 md:w-72 rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
            />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-teal-500/10 to-sky-500/10 blur-xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturePills() {
  const items = [
    { icon: Shield, label: "Community safety" },
    { icon: Radio, label: "RF + BLE detection" },
    { icon: Wifi, label: "Mesh & backhaul" },
    { icon: Cpu, label: "Edge ML ready" },
  ];
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
        >
          <Icon className="h-4 w-4" /> {label}
        </li>
      ))}
    </ul>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mb-8">
        <p className="text-teal-300 text-sm uppercase tracking-widest">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

function Overview() {
  return (
    <Section
      id="overview"
      eyebrow="Project Overview"
      title="Open, modular, privacy-first airspace awareness"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4 text-slate-300">
          <p>
            The Citizen Drone Defense Force (CDDF) empowers neighborhoods,
            campuses, and event organizers to responsibly monitor low-altitude
            activity. Nodes capture publicly available RF/BLE/Wi-Fi telemetry
            and acoustic cues, then securely share summaries (not raw
            recordings) to a community server.
          </p>
          <p>
            The system favors open hardware, reproducible builds, and
            transparent algorithms. You can start with a single node and scale
            to a city-wide mesh. Choose the modules you need—BLE Remote ID, RF
            spectrum sweeps, 2.4/5 GHz activity, GPS time-sync, or edge ML
            classifiers for specific sound signatures.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Easy install scripts and Docker images for gateways</li>
            <li>Token-less local dashboards; OAuth for remote sharing</li>
            <li>All code audited via public pull requests</li>
          </ul>
        </div>
        <CardPanel />
      </div>
    </Section>
  );
}

function CardPanel() {
  const cards = [
    {
      title: "Edge Nodes",
      body:
        "Raspberry Pi 4/5 or x86 mini-PCs run SDR/BLE capture and optional audio ML.",
      icon: Cpu,
    },
    {
      title: "Transport",
      body: "MQTT/WebSockets with TLS; store-and-forward if backhaul drops.",
      icon: Wifi,
    },
    {
      title: "Security",
      body:
        "API tokens, per-node keys, signed updates, and principle of least privilege.",
      icon: Shield,
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {cards.map(({ title, body, icon: Icon }) => (
        <div
          key={title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-teal-500/20 p-2">
              <Icon className="h-5 w-5 text-teal-300" />
            </div>
            <h3 className="font-medium">{title}</h3>
          </div>
          <p className="mt-3 text-sm text-slate-300">{body}</p>
        </div>
      ))}
    </div>
  );
}

function Hardware() {
  const gear = [
    {
      name: "Wideband SDR",
      items: ["HackRF One (1–6 GHz, TX/RX)", "RTL-SDR v3 (RX only, budget)"],
    },
    {
      name: "Antennas",
      items: ["Discone (25–1300 MHz)", "2.4 GHz + 5 GHz directional panels"],
    },
    {
      name: "Filters",
      items: [
        "FM broadcast notch (88–108 MHz)",
        "LTE notch (700–2700 MHz)",
        "2.4 GHz / 5 GHz band-pass",
      ],
    },
    {
      name: "Compute",
      items: ["Raspberry Pi 5 + active cooling", "64-128 GB fast microSD or NVMe"],
    },
    {
      name: "BLE Remote ID",
      items: [
        "nRF52840 USB dongle (optional)",
        "Zigbee/BLE sniffer compatible adapters",
      ],
    },
    {
      name: "Power & Mounting",
      items: ["PoE hat or 12 V regulator", "Weatherproof enclosure, mast clamps"],
    },
  ];

  return (
    <Section
      id="hardware"
      eyebrow="Recommended Hardware"
      title="Reference kit for a reliable node"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {gear.map((group) => (
          <div
            key={group.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="font-medium">{group.name}</h3>
            <ul className="mt-3 space-y-1 text-slate-300 text-sm">
              {group.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-300" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-slate-400">
        Tip: Place filters near the SDR to reduce front-end overload. Use
        low-loss coax (LMR-240/400) for long runs.
      </p>
    </Section>
  );
}

function Software() {
  return (
    <Section
      id="software"
      eyebrow="Software"
      title="Open-source code, docs, and issues on GitHub"
    >
      <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center">
        <div className="space-y-4 text-slate-300">
          <p>
            All firmware, capture utilities, dashboards, and deployment scripts
            live in the repository below. You’ll find quick-start guides for
            Raspberry Pi, Docker compose files for gateway nodes, and sample
            parsers for BLE Remote ID, 2.4/5 GHz activity, and acoustic
            inference.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>MIT-licensed; contributions welcome via PRs</li>
            <li>Issue templates for bug reports and hardware variants</li>
            <li>Security policy for responsible disclosure</li>
          </ul>
          <div className="pt-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-4 py-2 font-semibold hover:opacity-90 transition shadow"
            >
              <Github className="h-5 w-5" /> Go to Repository
            </a>
          </div>
        </div>
        <div className="relative">
          <RepoCard url={GITHUB_URL} />
        </div>
      </div>
    </Section>
  );
}

function RepoCard({ url }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-teal-500/20 p-2">
          <Github className="h-5 w-5 text-teal-300" />
        </div>
        <div>
          <p className="text-sm text-slate-400">GitHub</p>
          <h3 className="font-medium">citizen-drone-defense-force</h3>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-300">
        Click to open the repo with code, docs, and deployment scripts for CDDF
        nodes and backend.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-1.5 hover:bg-white/10 transition"
      >
        <Github className="h-4 w-4" /> <span className="text-sm">Open on GitHub</span>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 py-10 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} Citizen Drone Defense Force • Built with ❤️
        and open-source tools
      </p>
    </footer>
  );
}
