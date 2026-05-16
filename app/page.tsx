import { ArrowRight, Mail, Github, Linkedin, Briefcase, BookOpen, Check } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillCard } from '@/components/SkillCard';
import { navLinks, projects, skills, socialLinks, education, experience, softSkills, contactInfo } from '@/lib/content';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100">
      <Navbar />
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
        <section id="hero" className="overflow-hidden rounded-[2rem] border border-transparent bg-[rgba(6,182,212,0.03)] p-8 md:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Hi, I’m Deepanshu.</p>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-100 sm:text-6xl">
              Building modern products —
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">growing every step</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Student developer focused on clean, professional interfaces and reliable full stack solutions. I craft responsive experiences that scale with thoughtful architecture and continual learning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-card hover:opacity-95"
              >
                Let’s collaborate
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-100 transition hover:border-slate-500 hover:text-white"
              >
                See work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(255,255,255,0.02)] px-4 py-2 text-slate-200">
                <strong className="text-primary/90">Growth</strong>
                <span className="text-slate-400">— continuous learning & production-ready code</span>
              </div>
              <div className="ml-auto flex gap-3">
                <a href="https://github.com/deepanshu83?utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.02)] px-4 py-2 text-sm text-slate-200">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/deepanshujangid83/?utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.02)] px-4 py-2 text-sm text-slate-200">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20">
          <SectionHeading title="About" subtitle="Who I am" />
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-soft">
              <p className="text-base leading-8 text-slate-300">
                I am a Computer Science student at B K Birla Institute of Engineering and Technology, Pilani, building real projects while learning full stack development. My focus is on clean UI, practical application logic, and steady improvement through hands-on work.
              </p>
              <p className="text-base leading-8 text-slate-300">
                I enjoy exploring modern frontend patterns, responsive interactions, and creative development tools while keeping the experience easy to use. I like building projects that solve real problems and help me grow as a developer.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 text-slate-300 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Current focus</p>
              <ul className="mt-6 space-y-4 text-sm leading-7">
                <li>Full stack application development with Next.js and Node.js.</li>
                <li>Modern UI interactions, clean layouts, and subtle motion.</li>
                <li>Strengthening Data Structures & Algorithms fundamentals.</li>
                <li>Exploring AI/ML concepts and practical applications.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="mt-20">
          <SectionHeading title="Education" subtitle="Learning & Growth" />
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.school} className="rounded-2xl border border-transparent bg-[rgba(12,26,46,0.6)] p-6 shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-100">{edu.degree}</h3>
                    <p className="mt-1 text-sm text-slate-400">{edu.school}</p>
                    <p className="mt-2 text-sm text-slate-400">{edu.duration}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-20">
          <SectionHeading title="Skills" subtitle="What I work with" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.category} category={skill.category} items={skill.items} />
            ))}
          </div>
        </section>

        <section id="experience" className="mt-20">
          <SectionHeading title="Experience" subtitle="What I've done" />
          <div className="space-y-5">
            {experience.map((exp, idx) => (
              <div key={idx} className="rounded-2xl border border-transparent bg-[rgba(12,26,46,0.6)] p-6 shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-100">{exp.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{exp.company} • {exp.duration}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-300">
                      <Check className="h-4 w-4 flex-shrink-0 text-primary/80 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20">
          <SectionHeading title="Featured Projects" subtitle="Recent work" />
          <div className="grid gap-5 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} title={project.title} description={project.description} tech={project.tech} github={project.github} />
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-soft">
          <SectionHeading title="Contact" subtitle="Let’s connect" />
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-slate-300">
              <p className="text-base leading-8">
                I’m open to collaboration, internships, and practical development tasks that help me keep learning. If you have a project idea or want to connect, reach out and I’ll get back soon.
              </p>
              <div className="space-y-3 rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Get in touch</p>
                <div className="space-y-3 text-sm text-slate-300">
                  <p>
                      GitHub:{' '}
                      <a href={socialLinks[0].href} target="_blank" rel="noreferrer" className="text-slate-100 hover:text-white">
                        deepanshu83
                      </a>
                    </p>
                    <p>
                      LinkedIn:{' '}
                      <a href={socialLinks[1].href} target="_blank" rel="noreferrer" className="text-slate-100 hover:text-white">
                        Deepanshu Jangid
                      </a>
                    </p>
                    <p>Email: deepanshu.jangid.83@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-[1.75rem] border border-slate-800/90 bg-slate-900/80 p-8">
              <div className="space-y-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Want to connect?</p>
                <p className="text-lg font-medium text-slate-100">Send a message, request a resume, or say hello.</p>
                <a
                  href="mailto:deepanshu.jangid.83@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Email me
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
