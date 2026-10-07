import {
  Target,
  Lightbulb,
  Zap,
} from 'lucide-react';

const TECH_STACK = [
  'React',
  'TypeScript',
  'Java',
  'C++',
  'HTML',
  'CSS',
  'JavaScript',
  'GitHub',
];

const JOURNEY_STEPS = [
  {
    phase: 'Started Coding',
    time: '2024',
    desc: 'Started learning programming fundamentals and problem solving.',
    color: '#00d4ff',
  },
  {
    phase: 'CSE Journey',
    time: '2025–2029',
    desc: 'Pursuing Computer Science Engineering and building skills through projects, development and continuous learning.',
    color: '#00e5ff',
  },
  {
    phase: 'SIH 2025',
    time: '2025',
    desc: 'Participated in Smart India Hackathon and worked in a team environment.',
    color: '#26c6da',
  },
  {
    phase: 'Currently Building',
    time: '2026',
    desc: 'Continuing engineering studies while building real-world projects and improving development skills.',
    color: '#4dd0e1',
  },
];

export default function CreatorProfile() {
  return (
    <section
      id="creator-profile"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,15,30,1) 0%, var(--dark-bg) 100%)',
        }}
      />

      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="cyber-badge inline-block mb-4">
            ABOUT THE CREATOR
          </div>

          <h2
            className="font-orbitron font-black mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              color: 'var(--neon-blue)',
              textShadow: '0 0 20px rgba(0,212,255,0.4)',
            }}
          >
            MY JOURNEY
          </h2>

          <p
            className="max-w-2xl mx-auto"
            style={{
              color: 'rgba(224,242,254,0.55)',
              fontSize: '1.05rem',
            }}
          >
            I am a Computer Science Engineering student passionate about
            software development, web technologies and problem solving. My
            goal is to build impactful applications, contribute to innovative
            projects and grow into a professional software engineer.
          </p>

          <div className="neon-line max-w-xs mx-auto mt-4" />
        </div>

        {/* Profile + Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

          {/* Profile Photo */}
          <div className="reveal-left glass-card rounded-xl p-6 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
                boxShadow: '0 0 12px var(--neon-cyan)',
              }}
            />

            <div className="relative mx-auto w-full max-w-sm">

              {/* Neon frame */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-70"
                style={{
                  background:
                    'linear-gradient(135deg, var(--neon-cyan), transparent 45%, var(--neon-blue))',
                  filter: 'blur(5px)',
                }}
              />

              <div className="relative rounded-2xl overflow-hidden border border-cyan-400/40 bg-black">
                <img
                  src="/profile.jpg"
                  alt="Pushkar Gupta"
                  className="w-full aspect-[4/5] object-cover object-center"
                />

                {/* Image overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 65%, rgba(0,10,20,0.75) 100%)',
                  }}
                />

                {/* Scanline */}
                <div
                  className="absolute left-0 right-0 top-1/2 h-px pointer-events-none"
                  style={{
                    background: 'rgba(0,255,240,0.5)',
                    boxShadow: '0 0 8px rgba(0,255,240,0.7)',
                  }}
                />
              </div>

              {/* Corner markers */}
              <div className="absolute -top-2 -left-2 w-7 h-7 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute -top-2 -right-2 w-7 h-7 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute -bottom-2 -left-2 w-7 h-7 border-l-2 border-b-2 border-cyan-400" />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 border-r-2 border-b-2 border-cyan-400" />
            </div>

            <div className="text-center mt-6">
              <div
                className="font-orbitron font-black text-xl"
                style={{
                  color: 'var(--neon-cyan)',
                  textShadow: '0 0 12px rgba(0,255,240,0.4)',
                }}
              >
                PUSHKAR GUPTA
              </div>

              <div
                className="font-mono text-xs mt-2 tracking-[0.2em]"
                style={{ color: 'rgba(224,242,254,0.45)' }}
              >
                CSE STUDENT • DEVELOPER
              </div>

              <div className="cyber-badge inline-block mt-4">
                AVAILABLE FOR OPPORTUNITIES
              </div>
            </div>
          </div>

          {/* Project Goals */}
          <div className="reveal-left glass-card rounded-xl p-8 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-5"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,212,255,0.3), transparent)',
              }}
            />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: 'var(--neon-cyan)',
                }}
              >
                <Target size={20} />
              </div>

              <h3
                className="font-orbitron font-bold text-lg"
                style={{ color: '#e0f2fe' }}
              >
                Project Goals
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                'Build responsive and modern web applications',
                'Improve problem-solving and development skills',
                'Create impactful software projects',
                'Grow as a professional software engineer',
              ].map((goal, i) => (
                <li key={i} className="flex gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 animate-pulse"
                    style={{
                      background: 'var(--neon-cyan)',
                      boxShadow: '0 0 4px var(--neon-cyan)',
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: 'rgba(224,242,254,0.65)',
                      fontFamily: 'Rajdhani',
                    }}
                  >
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Vision */}
          <div className="reveal-right glass-card rounded-xl p-8 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-32 h-32 opacity-5"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,212,255,0.3), transparent)',
              }}
            />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: 'var(--neon-cyan)',
                }}
              >
                <Lightbulb size={20} />
              </div>

              <h3
                className="font-orbitron font-bold text-lg"
                style={{ color: '#e0f2fe' }}
              >
                Career Vision
              </h3>
            </div>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{
                color: 'rgba(224,242,254,0.65)',
                fontFamily: 'Rajdhani',
              }}
            >
              My goal is to become a skilled software engineer and contribute
              to innovative projects that solve real-world problems. I enjoy
              learning new technologies and continuously improving my
              development skills.
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: 'rgba(224,242,254,0.5)',
                fontFamily: 'Rajdhani',
              }}
            >
              This portfolio represents my learning journey, projects,
              achievements, and technical growth as a developer.
            </p>
          </div>
        </div>

        {/* Development Journey */}
        <div className="mb-20">
          <h3
            className="font-orbitron font-bold text-xl mb-8 text-center reveal"
            style={{ color: 'var(--neon-blue)' }}
          >
            DEVELOPMENT JOURNEY
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {JOURNEY_STEPS.map((step, i) => (
              <div
                key={step.phase}
                className="reveal"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="glass-card rounded-xl p-5 text-center relative overflow-hidden h-full">

                  <div
                    className="absolute top-0 left-1/4 right-1/4 h-0.5"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                    }}
                  />

                  <div
                    className="cyber-badge mx-auto mb-3"
                    style={{
                      color: step.color,
                      borderColor: `${step.color}40`,
                      display: 'inline-block',
                    }}
                  >
                    {step.time}
                  </div>

                  <h4
                    className="font-orbitron font-bold text-sm mb-3"
                    style={{ color: step.color }}
                  >
                    {step.phase}
                  </h4>

                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: 'rgba(224,242,254,0.5)',
                      fontFamily: 'Rajdhani',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="reveal">
          <div className="glass-card rounded-xl p-8 relative overflow-hidden">

            <div className="absolute top-0 left-0 right-0 neon-line" />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: 'var(--neon-cyan)',
                }}
              >
                <Zap size={20} />
              </div>

              <h3
                className="font-orbitron font-bold text-lg"
                style={{ color: '#e0f2fe' }}
              >
                Technologies Used
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech}
                  className="cyber-badge"
                  style={{
                    fontSize: '0.65rem',
                    background: 'rgba(0,212,255,0.05)',
                    borderColor: 'rgba(0,212,255,0.25)',
                    color: 'var(--neon-cyan)',
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>

            <div
              className="mt-6 pt-6"
              style={{
                borderTop: '1px solid rgba(0,212,255,0.1)',
              }}
            >
              <h4
                className="font-orbitron font-bold text-sm mb-3"
                style={{ color: 'rgba(224,242,254,0.7)' }}
              >
                Why These Technologies?
              </h4>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: 'rgba(224,242,254,0.55)',
                  fontFamily: 'Rajdhani',
                }}
              >
                I use React and TypeScript for modern frontend development,
                Java and C++ for programming fundamentals, and GitHub for
                version control. These technologies help me build efficient,
                scalable and user-friendly applications.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
