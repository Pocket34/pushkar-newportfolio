import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Play,
  Sparkles,
  Trophy,
  Zap,
} from 'lucide-react';

const TYPING_STRINGS = [
  'SOFTWARE DEVELOPER',
  'CSE STUDENT',
  'SIH 2025 PARTICIPANT',
  'WEB DEVELOPER',
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* ---------------- TYPING EFFECT ---------------- */

  useEffect(() => {
    const currentString = TYPING_STRINGS[strIdx];

    const typingSpeed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        const nextText = currentString.slice(0, charIdx + 1);
        setTypedText(nextText);
        setCharIdx(charIdx + 1);

        if (charIdx + 1 === currentString.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const nextText = currentString.slice(0, charIdx - 1);
        setTypedText(nextText);
        setCharIdx(charIdx - 1);

        if (charIdx - 1 === 0) {
          setDeleting(false);
          setStrIdx((prev) => (prev + 1) % TYPING_STRINGS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, strIdx]);

  /* ---------------- SCROLL ---------------- */

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center bg-[#07090d]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Cyber grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,140,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,140,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px',
          }}
        />

        {/* Radial glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />

        {/* Scanlines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.25) 4px)',
          }}
        />

        {/* Horizontal neon lines */}
        <div className="absolute top-[18%] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute top-[78%] left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-28">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="relative">

            {/* Top badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-7 rounded-full border border-blue-500/30 bg-blue-500/[0.07] backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <span className="font-mono text-[11px] sm:text-xs tracking-[0.18em] text-blue-300">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            {/* Small intro */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-cyan-400" />

              <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-cyan-400">
                HELLO, I'M
              </span>
            </div>

            {/* Name */}
            <h1 className="leading-[0.82] tracking-[-0.04em] mb-7">
              <span className="block text-5xl sm:text-7xl lg:text-8xl font-black text-white">
                PUSHKAR
              </span>

              <span
                className="block text-5xl sm:text-7xl lg:text-8xl font-black"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(80,170,255,0.9)',
                }}
              >
                GUPTA
              </span>
            </h1>

            {/* Typing role */}
            <div className="flex items-center min-h-[45px] mb-6">
              <span className="text-cyan-400 font-mono text-sm sm:text-base mr-3">
                &gt;_
              </span>

              <span className="font-mono text-lg sm:text-2xl font-bold text-blue-300 tracking-wider">
                {typedText}
              </span>

              <span className="ml-1 h-6 w-[2px] bg-cyan-400 animate-pulse" />
            </div>

            {/* Description */}
            <p className="max-w-2xl text-gray-400 text-sm sm:text-base lg:text-lg leading-7 mb-8">
              Computer Science Engineering student passionate about
              <span className="text-gray-200"> software development</span>,
              <span className="text-gray-200"> web technologies</span> and
              <span className="text-gray-200"> innovative problem solving</span>.
              I enjoy building modern applications and turning ideas into
              practical digital experiences.
            </p>

            {/* =================================================
                SIH CARD
            ================================================= */}

            <div className="group relative max-w-xl mb-8">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/50 via-cyan-400/30 to-transparent opacity-70" />

              <div className="relative rounded-2xl bg-[#0b1018]/95 border border-blue-500/20 p-4 sm:p-5 backdrop-blur-xl">
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/30 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] sm:text-xs tracking-[0.15em] text-cyan-400">
                        ACHIEVEMENT
                      </span>

                      <span className="h-1 w-1 rounded-full bg-blue-400" />

                      <span className="font-mono text-[10px] sm:text-xs text-gray-500">
                        2025
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-base sm:text-lg">
                      Smart India Hackathon
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      Participated in SIH 2025 • Teamwork • Innovation •
                      Problem Solving
                    </p>
                  </div>

                  <Sparkles className="hidden sm:block ml-auto w-5 h-5 text-blue-400/70" />
                </div>
              </div>
            </div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="flex flex-wrap gap-3 mb-8">

              {/* Projects */}
              <button
                onClick={() => scrollTo('features')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                <Play className="w-4 h-4 fill-current" />
                View Projects

                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {/* Contact */}
              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-500/30 bg-blue-500/[0.05] hover:bg-blue-500/10 text-blue-300 font-semibold text-sm transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="flex items-center gap-3">

              <a
                href="https://github.com/Pocket34/pushkar-newportfolio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <div className="h-6 w-px bg-white/10 mx-1" />

              <span className="font-mono text-[10px] tracking-widest text-gray-600">
                CSE • 2026
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — FUTURISTIC HUD
          ================================================= */}

          <div className="relative hidden lg:flex justify-center items-center min-h-[600px]">

            {/* Outer rings */}
            <div className="absolute w-[480px] h-[480px] rounded-full border border-blue-500/10 animate-[spin_30s_linear_infinite]" />

            <div
              className="absolute w-[390px] h-[390px] rounded-full border border-cyan-400/10 animate-[spin_20s_linear_infinite_reverse]"
            />

            <div className="absolute w-[310px] h-[310px] rounded-full border border-blue-500/20" />

            {/* Orbit dots */}
            <div className="absolute w-[480px] h-[480px] animate-[spin_15s_linear_infinite]">
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
            </div>

            {/* Main HUD */}
            <div className="relative w-[350px] h-[470px]">

              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-blue-500/10 blur-[70px]" />

              {/* Top HUD */}
              <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
                <div className="font-mono text-[9px] tracking-[0.2em] text-blue-400">
                  SYSTEM // 01
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
                  <span className="font-mono text-[9px] text-green-400">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Robot */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative w-60 h-72">

                  {/* Head */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-24 rounded-[28px] border border-cyan-400/60 bg-[#0b1724] shadow-[0_0_40px_rgba(34,211,238,0.15)]">

                    <div className="absolute inset-3 rounded-[20px] border border-blue-500/20 bg-[#071019]" />

                    {/* Eyes */}
                    <div className="absolute top-9 left-8 w-5 h-2 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />
                    <div className="absolute top-9 right-8 w-5 h-2 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />

                    {/* Mouth */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-blue-400/60" />
                  </div>

                  {/* Antenna */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-7 bg-cyan-400/70" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />

                  {/* Neck */}
                  <div className="absolute top-[112px] left-1/2 -translate-x-1/2 w-10 h-8 border-x border-cyan-400/30 bg-blue-500/10" />

                  {/* Body */}
                  <div className="absolute top-[135px] left-1/2 -translate-x-1/2 w-40 h-32 rounded-[35px] border border-blue-400/50 bg-[#0a1521]">

                    <div className="absolute top-7 left-1/2 -translate-x-1/2 w-20 h-14 rounded-xl border border-cyan-400/30 bg-[#071019] flex items-center justify-center">
                      <Zap className="w-7 h-7 text-cyan-400 animate-pulse" />
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 flex justify-between">
                      <span className="w-8 h-1 rounded-full bg-blue-400/30" />
                      <span className="w-8 h-1 rounded-full bg-cyan-400/30" />
                    </div>
                  </div>

                  {/* Left arm */}
                  <div className="absolute top-[145px] left-0 w-9 h-28 rounded-full border border-blue-400/40 bg-[#0a1521] rotate-[8deg]" />

                  {/* Right arm */}
                  <div className="absolute top-[145px] right-0 w-9 h-28 rounded-full border border-blue-400/40 bg-[#0a1521] -rotate-[8deg]" />

                  {/* Legs */}
                  <div className="absolute bottom-0 left-[55px] w-12 h-28 rounded-b-3xl border border-blue-400/40 bg-[#0a1521]" />

                  <div className="absolute bottom-0 right-[55px] w-12 h-28 rounded-b-3xl border border-blue-400/40 bg-[#0a1521]" />
                </div>
              </div>

              {/* Left HUD info */}
              <div className="absolute left-0 top-[170px] font-mono text-[9px] leading-5 text-gray-600">
                <div className="text-cyan-400">PUSHKAR</div>
                <div>STATUS: ACTIVE</div>
                <div>MODE: BUILD</div>
                <div>CORE: CSE</div>
              </div>

              {/* Right HUD info */}
              <div className="absolute right-0 top-[170px] font-mono text-[9px] leading-5 text-gray-600 text-right">
                <div className="text-blue-400">SIH_2025</div>
                <div>TEAMWORK</div>
                <div>INNOVATION</div>
                <div>PROBLEM_SOLVING</div>
              </div>

              {/* Bottom */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                <div>
                  <div className="font-mono text-[8px] text-gray-600">
                    VERSION
                  </div>
                  <div className="font-mono text-xs text-blue-300">
                    2.0.26
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono text-[8px] text-gray-600">
                    BUILD
                  </div>
                  <div className="font-mono text-xs text-cyan-300">
                    PUSHKAR.EXE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STATS
        ================================================= */}

        <div className="mt-16 lg:mt-12 pt-7 border-t border-white/[0.07]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                2+
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-gray-600 mt-1">
                PROJECTS
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">
                SIH
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-gray-600 mt-1">
                2025 PARTICIPANT
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                CSE
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-gray-600 mt-1">
                COMPUTER SCIENCE
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-blue-400">
                2026
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-gray-600 mt-1">
                GRADUATION
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('features')}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-600 hover:text-cyan-400 transition-colors"
        >
          <span className="font-mono text-[8px] tracking-[0.3em]">
            SCROLL
          </span>

          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}