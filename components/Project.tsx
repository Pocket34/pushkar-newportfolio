import React from 'react';
import {
  ExternalLink,
  Github,
  Globe,
  Brain,
  Trophy,
  ArrowUpRight,
  FileText,
} from 'lucide-react';

const PROJECTS = [
  {
    number: '01',
    icon: <Globe size={25} />,
    category: 'WEB DEVELOPMENT',
    title: 'Personal Portfolio',
    description:
      'A futuristic developer portfolio designed to showcase my skills, projects, achievements and journey as a Computer Science Engineering student.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'LIVE',
    statusType: 'live',
    github: 'https://github.com/Pocket34/pushkar-newportfolio',
    demo: '/',
    projectUrl: '/',
    featured: true,
  },

  {
    number: '02',
    icon: <Brain size={25} />,
    category: 'AI / EDTECH',
    title: 'Gurukul AI',
    description:
      'An AI-powered learning platform inspired by the Gurukul learning philosophy, focused on smarter and personalized learning.',
    tech: ['AI', 'Web', 'Learning', 'Personalization'],
    status: 'LIVE',
    statusType: 'live',
    github: '#',
    demo: 'https://gurukul-ai-learning-vnfu.bolt.host/',
    projectUrl: 'https://gurukul-ai-learning-vnfu.bolt.host/',
    featured: false,
  },

  {
    number: '03',
    icon: <Trophy size={25} />,
    category: 'HACKATHON',
    title: 'Smart India Hackathon 2025',
    description:
      'Participated in Smart India Hackathon 2025 and worked on an AI-driven public health solution focused on disease awareness and accessible healthcare information.',
    tech: ['AI', 'HealthTech', 'Teamwork', 'Innovation'],
    status: '2025',
    statusType: 'achievement',
    github: '#',
    demo: '/SIH-2025.pdf',
    projectUrl: '/SIH-2025.pdf',
    featured: false,
  },
];

const openProject = (url: string) => {
  if (!url || url === '#') return;

  window.open(url, '_blank', 'noopener,noreferrer');
};

const handleCardKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  url: string
) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openProject(url);
  }
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[1px] bg-cyan-400" />
            <span className="text-cyan-400 text-xs tracking-[0.35em] font-mono">
              PROJECT_DATABASE
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400 font-mono text-sm leading-relaxed">
            A collection of projects, experiments and hackathon work built
            while exploring software development, AI and modern web
            technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.number}
              role="link"
              tabIndex={0}
              onClick={() => openProject(project.projectUrl)}
              onKeyDown={(e) =>
                handleCardKeyDown(e, project.projectUrl)
              }
              className={`
                group relative cursor-pointer
                rounded-2xl border
                border-white/10
                bg-black/40
                backdrop-blur-xl
                p-6 md:p-8
                transition-all duration-300
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,0.10)]
                focus:outline-none
                focus:border-cyan-400
                ${project.featured ? 'lg:col-span-2' : ''}
              `}
            >
              {/* Top line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-12 h-12 rounded-xl
                      border border-cyan-400/20
                      bg-cyan-400/5
                      flex items-center justify-center
                      text-cyan-400
                      group-hover:bg-cyan-400/10
                      transition-colors
                    "
                  >
                    {project.icon}
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.25em] text-cyan-400 font-mono mb-1">
                      {project.category}
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs text-gray-600 font-mono">
                  {project.number}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm text-gray-400 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1.5
                      rounded-md
                      border border-white/10
                      bg-white/[0.03]
                      text-[10px]
                      tracking-wider
                      text-gray-400
                      font-mono
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* SIH PDF section */}
              {project.title === 'Smart India Hackathon 2025' && (
                <div
                  className="
                    mt-6
                    p-4
                    rounded-xl
                    border border-cyan-400/20
                    bg-cyan-400/[0.04]
                    flex items-center justify-between gap-4
                  "
                >
                  <div className="flex items-center gap-3">
                    <FileText
                      size={20}
                      className="text-cyan-400"
                    />

                    <div>
                      <p className="text-sm text-white font-semibold">
                        SIH 2025 Presentation
                      </p>

                      <p className="text-[10px] text-gray-500 font-mono mt-1">
                        PDF DOCUMENT
                      </p>
                    </div>
                  </div>

                  <span className="text-cyan-400 text-xs font-mono">
                    VIEW PDF →
                  </span>
                </div>
              )}

              {/* Bottom */}
              <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/5">
                {/* Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      project.statusType === 'live'
                        ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]'
                        : 'bg-cyan-400'
                    }`}
                  />

                  <span className="text-[10px] tracking-widest text-gray-500 font-mono">
                    {project.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {/* GitHub */}
                  {project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        w-9 h-9
                        rounded-lg
                        border border-white/10
                        flex items-center justify-center
                        text-gray-500
                        hover:text-white
                        hover:border-white/30
                        transition-all
                      "
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={16} />
                    </a>
                  ) : (
                    <span
                      className="
                        w-9 h-9
                        rounded-lg
                        border border-white/5
                        flex items-center justify-center
                        text-gray-700
                      "
                    >
                      <Github size={16} />
                    </span>
                  )}

                  {/* Open */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project.projectUrl);
                    }}
                    className="
                      flex items-center gap-2
                      px-4 py-2
                      rounded-lg
                      border border-cyan-400/20
                      bg-cyan-400/5
                      text-cyan-400
                      text-xs
                      font-mono
                      hover:bg-cyan-400/10
                      hover:border-cyan-400/40
                      transition-all
                    "
                  >
                    {project.title === 'Smart India Hackathon 2025'
                      ? 'VIEW PDF'
                      : 'LIVE DEMO'}

                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              {/* Hover arrow */}
              <div
                className="
                  absolute right-5 top-1/2
                  -translate-y-1/2
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-300
                  text-cyan-400
                  pointer-events-none
                "
              >
                <ExternalLink size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// Vercel deployment trigger

export default Projects;
