import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Instagram,
} from 'lucide-react';

export default function Team() {
  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/pushkaarrrr_lyf',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pushkar-gupta-770875282',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Pocket34',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contact@pushkargupta898@gmail.com',
    },
  ];

  return (
    <section
      id="team"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-surface) 100%)',
        }}
      />

      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="cyber-badge inline-block mb-4">
            08 // CREATOR
          </div>

          <h2
            className="font-orbitron font-black mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              color: 'var(--neon-blue)',
              textShadow:
                '0 0 20px rgba(0,212,255,0.4)',
            }}
          >
            PUSHKAR GUPTA
          </h2>

          <p
            className="max-w-2xl mx-auto"
            style={{
              color: 'rgba(224,242,254,0.55)',
            }}
          >
            Computer Science Engineering Student | Developer &
            Designer | Frontend Developer | Problem Solver
          </p>

          <div className="neon-line max-w-xs mx-auto mt-4" />
        </div>

        {/* Creator Profile Card */}
        <div className="max-w-2xl mx-auto reveal">

          <style>{`
            @keyframes scanline {
              0% {
                top: -100%;
              }
              50% {
                top: 100%;
              }
              100% {
                top: 100%;
              }
            }

            @keyframes glow-pulse {
              0%, 100% {
                box-shadow:
                  0 0 20px rgba(0,212,255,0.4),
                  inset 0 0 20px rgba(0,212,255,0.1);
              }

              50% {
                box-shadow:
                  0 0 40px rgba(0,212,255,0.6),
                  inset 0 0 30px rgba(0,212,255,0.2);
              }
            }

            @keyframes float-particle {
              0%, 100% {
                transform: translateY(0px) translateX(0px);
                opacity: 0;
              }

              10% {
                opacity: 1;
              }

              90% {
                opacity: 1;
              }

              100% {
                transform: translateY(-40px) translateX(20px);
                opacity: 0;
              }
            }

            @keyframes border-glow {
              0%, 100% {
                filter:
                  drop-shadow(0 0 8px rgba(0,212,255,0.4));
              }

              50% {
                filter:
                  drop-shadow(0 0 20px rgba(0,212,255,0.8));
              }
            }

            .profile-frame {
              animation:
                glow-pulse 3s ease-in-out infinite;
            }

            .scanline-overlay {
              animation:
                scanline 3s ease-in-out infinite;
            }

            .particle {
              position: absolute;
              width: 2px;
              height: 2px;
              background: var(--neon-cyan);
              border-radius: 50%;
              animation:
                float-particle 4s ease-out infinite;
              opacity: 0;
            }

            .profile-border {
              animation:
                border-glow 2s ease-in-out infinite;
            }
          `}</style>

          <div className="relative">

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                [8, 20],
                [18, 70],
                [28, 35],
                [38, 85],
                [48, 15],
                [58, 65],
                [68, 30],
                [76, 80],
                [84, 45],
                [90, 18],
                [94, 68],
                [55, 92],
              ].map(([left, top], i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + (i % 3) * 0.5}s`,
                  }}
                />
              ))}
            </div>

            {/* Main card */}
            <div className="relative glass-card rounded-3xl p-8 overflow-hidden group">

              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Scanline */}
              <div
                className="scanline-overlay absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(0,212,255,0.03) 30%, transparent 50%, rgba(0,212,255,0.03) 100%)',
                  height: '100px',
                  mixBlendMode: 'overlay',
                }}
              />

              <div className="relative z-10">

                {/* ========================= */}
                {/* PROFILE PHOTO */}
                {/* ========================= */}

                <div className="flex justify-center mb-8">

                  <div
                    className="
                      relative
                      w-48 h-48
                      sm:w-56 sm:h-56
                    "
                  >

                    {/* Outer neon ring */}
                    <div
                      className="absolute inset-0 rounded-full profile-border"
                      style={{
                        border:
                          '3px solid var(--neon-cyan)',
                        boxShadow:
                          '0 0 30px rgba(0,212,255,0.6), inset 0 0 30px rgba(0,212,255,0.1)',
                      }}
                    />

                    {/* Middle ring */}
                    <div
                      className="absolute inset-2 rounded-full"
                      style={{
                        border:
                          '1px solid rgba(0,212,255,0.35)',
                        boxShadow:
                          'inset 0 0 20px rgba(0,212,255,0.08)',
                      }}
                    />

                    {/* PHOTO CIRCLE */}
                    <div
                      className="
                        absolute
                        inset-4
                        rounded-full
                        overflow-hidden
                        bg-gradient-to-br
                        from-cyan-900
                        to-blue-900
                      "
                    >
                      <img
                        src="/profile.jpg"
                        alt="Pushkar Gupta"
                        className="
                          block
                          w-full
                          h-full
                          object-cover
                          object-center
                        "
                        style={{
                          filter:
                            'brightness(0.95) contrast(1.1)',
                        }}
                      />

                      {/* Photo glow overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'radial-gradient(circle at 30% 30%, rgba(0,212,255,0.12), transparent 50%)',
                        }}
                      />

                      {/* Bottom dark gradient */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(to bottom, transparent 65%, rgba(0,8,20,0.25) 100%)',
                        }}
                      />

                      {/* Photo scanline */}
                      <div
                        className="absolute left-0 right-0 top-1/2 h-px pointer-events-none"
                        style={{
                          background:
                            'rgba(0,255,240,0.5)',
                          boxShadow:
                            '0 0 8px rgba(0,255,240,0.7)',
                        }}
                      />
                    </div>

                    {/* Corner brackets */}
                    {[
                      {
                        top: '-8px',
                        left: '-8px',
                        rotation: '0deg',
                      },
                      {
                        top: '-8px',
                        right: '-8px',
                        rotation: '90deg',
                      },
                      {
                        bottom: '-8px',
                        left: '-8px',
                        rotation: '270deg',
                      },
                      {
                        bottom: '-8px',
                        right: '-8px',
                        rotation: '180deg',
                      },
                    ].map((pos, i) => (
                      <div
                        key={i}
                        className="absolute w-6 h-6"
                        style={{
                          top: pos.top,
                          left: pos.left,
                          right: pos.right,
                          bottom: pos.bottom,
                          transform:
                            `rotate(${pos.rotation})`,
                        }}
                      >
                        <div
                          className="
                            w-full
                            h-full
                            border-2
                            border-t-transparent
                            border-r-transparent
                          "
                          style={{
                            borderColor:
                              'var(--neon-cyan)',
                            borderRadius: '2px',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ========================= */}
                {/* INFO */}
                {/* ========================= */}

                <div className="text-center space-y-4 mb-8">

                  <div>
                    <h3
                      className="
                        font-orbitron
                        font-bold
                        text-2xl
                        mb-2
                      "
                      style={{
                        color: 'var(--neon-cyan)',
                        textShadow:
                          '0 0 10px var(--neon-cyan)',
                      }}
                    >
                      PUSHKAR GUPTA
                    </h3>

                    <div className="cyber-badge mx-auto mb-3">
                      CSE STUDENT
                    </div>

                    <p
                      className="font-mono-tech text-sm"
                      style={{
                        color:
                          'rgba(0,212,255,0.6)',
                      }}
                    >
                      Computer Science Engineering Student
                    </p>
                  </div>

                  {/* Role badges */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      'CSE',
                      'REACT',
                      'SIH 2025',
                      'TYPESCRIPT',
                    ].map((role) => (
                      <div
                        key={role}
                        className="cyber-badge"
                        style={{
                          fontSize: '0.55rem',
                          background:
                            'rgba(0,212,255,0.08)',
                          borderColor:
                            'rgba(0,212,255,0.3)',
                        }}
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px my-6"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)',
                  }}
                />

                {/* Skills */}
                <div className="space-y-3 mb-8">

                  {[
                    {
                      icon: <Code2 size={16} />,
                      label: 'Web Development',
                      desc:
                        'React, TypeScript, Tailwind CSS',
                    },
                    {
                      icon: <Code2 size={16} />,
                      label: 'Hackathon Experience',
                      desc:
                        'Smart India Hackathon 2025',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-start"
                    >
                      <div
                        className="
                          flex-shrink-0
                          w-9 h-9
                          rounded-lg
                          flex
                          items-center
                          justify-center
                          mt-0.5
                        "
                        style={{
                          background:
                            'rgba(0,212,255,0.08)',
                          border:
                            '1px solid rgba(0,212,255,0.2)',
                          color:
                            'var(--neon-cyan)',
                        }}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <div
                          className="
                            font-orbitron
                            text-xs
                            font-bold
                            mb-0.5
                          "
                          style={{
                            color: '#e0f2fe',
                          }}
                        >
                          {item.label}
                        </div>

                        <div
                          className="text-xs"
                          style={{
                            color:
                              'rgba(224,242,254,0.5)',
                            fontFamily: 'Rajdhani',
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ========================= */}
                {/* SOCIAL LINKS */}
                {/* ========================= */}

                <div className="flex gap-4 justify-center pt-2 flex-wrap">

                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        title={social.label}
                        className="group/social relative"
                      >
                        <div
                          className="
                            w-14 h-14
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            hover:scale-110
                          "
                          style={{
                            background:
                              'rgba(0,212,255,0.08)',
                            border:
                              '2px solid rgba(0,212,255,0.3)',
                            color:
                              'var(--neon-cyan)',
                            cursor: 'pointer',
                          }}
                        >
                          <Icon size={22} />
                        </div>

                        {/* Hover label */}
                        <div
                          className="
                            absolute
                            -bottom-8
                            left-1/2
                            -translate-x-1/2
                            whitespace-nowrap
                            opacity-0
                            group-hover/social:opacity-100
                            transition-opacity
                            duration-200
                            pointer-events-none
                          "
                          style={{
                            fontSize: '0.65rem',
                            color:
                              'var(--neon-cyan)',
                            textShadow:
                              '0 0 8px var(--neon-cyan)',
                            fontFamily:
                              'Share Tech Mono',
                          }}
                        >
                          {social.label}
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Status */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    mt-8
                    pt-6
                  "
                  style={{
                    borderTop:
                      '1px solid rgba(0,212,255,0.1)',
                  }}
                >
                  <div
                    className="
                      w-2 h-2
                      rounded-full
                      animate-pulse
                    "
                    style={{
                      background:
                        'var(--neon-cyan)',
                      boxShadow:
                        '0 0 8px var(--neon-cyan)',
                    }}
                  />

                  <span
                    className="font-mono-tech text-xs"
                    style={{
                      color:
                        'rgba(0,212,255,0.6)',
                    }}
                  >
                    PROFILE ONLINE // READY TO CONNECT
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
