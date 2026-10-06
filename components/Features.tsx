import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Terminal,
  Trophy,
  Cpu,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

const SKILLS = [
  {
    icon: <Code2 size={24} />,
    title: 'React + TypeScript',
    desc: 'Building modern, responsive and interactive web interfaces with React and TypeScript.',
    badge: 'FRONTEND',
    level: 'CORE',
  },
  {
    icon: <Globe size={24} />,
    title: 'HTML / CSS / JS',
    desc: 'Creating responsive layouts, animations and user-friendly frontend experiences.',
    badge: 'WEB',
    level: 'CORE',
  },
  {
    icon: <Terminal size={24} />,
    title: 'Java',
    desc: 'Object-oriented programming, logical problem solving and programming fundamentals.',
    badge: 'PROGRAMMING',
    level: 'LEARNING',
  },
  {
    icon: <Cpu size={24} />,
    title: 'C Programming',
    desc: 'Understanding programming fundamentals, arrays, functions, pointers and problem solving.',
    badge: 'FUNDAMENTALS',
    level: 'CORE',
  },
  {
    icon: <GitBranch size={24} />,
    title: 'Git & GitHub',
    desc: 'Managing source code, version control and collaborating on software projects.',
    badge: 'TOOLS',
    level: 'CORE',
  },
  {
    icon: <Database size={24} />,
    title: 'DBMS / SQL',
    desc: 'Learning database concepts, relational data and SQL fundamentals.',
    badge: 'DATABASE',
    level: 'LEARNING',
  },
  {
    icon: <Trophy size={24} />,
    title: 'SIH 2025',
    desc: 'Participated in Smart India Hackathon 2025 with a focus on teamwork and innovative problem solving.',
    badge: 'ACHIEVEMENT',
    level: '2025',
  },
  {
    icon: <Layers size={24} />,
    title: 'Problem Solving',
    desc: 'Developing logical thinking through coding practice, projects and technical problem solving.',
    badge: 'DSA',
    level: 'GROWING',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-28 overflow-hidden bg-[#07090d]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,140,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,140,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px',
          }}
        />

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="text-center mb-16 reveal">

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-blue-500/25 bg-blue-500/[0.06]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />

            <span className="font-mono text-[10px] tracking-[0.2em] text-blue-300">
              02 // TECHNICAL PROFILE
            </span>
          </div>

          <h2
            className="font-orbitron font-black mb-5"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: '#e0f2fe',
              textShadow: '0 0 25px rgba(0,212,255,0.25)',
            }}
          >
            SKILLS{' '}
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(34,211,238,0.8)',
              }}
            >
              & STACK
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-sm sm:text-base leading-7"
            style={{ color: 'rgba(224,242,254,0.5)' }}
          >
            Technologies, tools and problem-solving skills I am using to
            build, learn and grow as a software developer.
          </p>

          <div className="neon-line max-w-xs mx-auto mt-6" />
        </div>

        {/* =================================================
            TOP TECH STRIP
        ================================================= */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">

          <div className="group p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-blue-400/30 transition-all">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-cyan-400" />

              <div>
                <div className="font-mono text-xs text-white">
                  FRONTEND
                </div>

                <div className="font-mono text-[9px] text-gray-600 mt-1">
                  REACT • TS • JS
                </div>
              </div>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-blue-400/30 transition-all">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-blue-400" />

              <div>
                <div className="font-mono text-xs text-white">
                  PROGRAMMING
                </div>

                <div className="font-mono text-[9px] text-gray-600 mt-1">
                  C • JAVA
                </div>
              </div>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-blue-400/30 transition-all">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-cyan-400" />

              <div>
                <div className="font-mono text-xs text-white">
                  DATABASE
                </div>

                <div className="font-mono text-[9px] text-gray-600 mt-1">
                  DBMS • SQL
                </div>
              </div>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-blue-400/30 transition-all">
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-blue-400" />

              <div>
                <div className="font-mono text-xs text-white">
                  WORKFLOW
                </div>

                <div className="font-mono text-[9px] text-gray-600 mt-1">
                  GIT • GITHUB
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =================================================
            SKILLS GRID
        ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {SKILLS.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1017]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30"
              style={{
                transitionDelay: `${(index % 4) * 70}ms`,
              }}
            >

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.09), transparent 65%)',
                }}
              />

              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, #22d3ee, transparent)',
                  boxShadow: '0 0 12px rgba(34,211,238,0.8)',
                }}
              />

              <div className="relative z-10">

                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-5">

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(34,211,238,0.07)',
                      border: '1px solid rgba(34,211,238,0.18)',
                      color: '#22d3ee',
                    }}
                  >
                    {skill.icon}
                  </div>

                  <span
                    className="font-mono text-[8px] tracking-[0.15em] px-2 py-1 rounded-md"
                    style={{
                      color: '#67e8f9',
                      background: 'rgba(34,211,238,0.06)',
                      border: '1px solid rgba(34,211,238,0.12)',
                    }}
                  >
                    {skill.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-orbitron font-bold text-sm mb-3"
                  style={{ color: '#e0f2fe' }}
                >
                  {skill.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs leading-relaxed min-h-[62px]"
                  style={{
                    color: 'rgba(224,242,254,0.48)',
                    fontFamily: 'Rajdhani',
                    lineHeight: '1.65',
                  }}
                >
                  {skill.desc}
                </p>

                {/* Bottom status */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">

                  <span
                    className="font-mono text-[8px] tracking-[0.18em]"
                    style={{
                      color:
                        skill.level === 'CORE'
                          ? '#22d3ee'
                          : 'rgba(224,242,254,0.35)',
                    }}
                  >
                    {skill.level}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-gray-700 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <div className="mt-12 relative overflow-hidden rounded-2xl border border-blue-500/15 bg-blue-500/[0.025] p-6 sm:p-8">

          <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
          <div className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-blue-400 to-transparent" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>

              <div>
                <div className="font-mono text-xs text-cyan-400 tracking-widest mb-1">
                  CURRENT STATUS
                </div>

                <h3 className="text-white font-bold text-base sm:text-lg">
                  Always Learning. Always Building.
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Continuously improving my technical skills through projects,
                  coding and practical experience.
                </p>
              </div>

            </div>

            <div className="shrink-0 font-mono text-[9px] tracking-widest text-gray-600">
              PUSHKAR.EXE // ACTIVE
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}