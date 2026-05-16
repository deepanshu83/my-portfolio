import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillCard } from '@/components/SkillCard';
import { navLinks, projects, skills, socialLinks } from '@/lib/content';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100">
      <Navbar />
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
        <section id="hero" className="overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-soft md:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Hi, I’m Deepanshu.</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
              I build modern full stack projects and continuously improve through real-world development.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Student developer focused on clean UI, practical web applications, and steady growth in full stack development. I enjoy turning ideas into responsive experiences with thoughtful frontend and backend work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Contact me
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-100 transition hover:border-slate-500 hover:text-white"
              >
                View projects
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
              <a
                href="https://github.com/deepanshu83?utm_source=chatgpt.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800/90 bg-slate-900/80 px-4 py-2 hover:border-slate-700"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/deepanshujangid83/?utm_source=chatgpt.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800/90 bg-slate-900/80 px-4 py-2 hover:border-slate-700"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="mailto:hello@deepanshujangid.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800/90 bg-slate-900/80 px-4 py-2 hover:border-slate-700"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
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
                <li>Learning React Native, creative coding, and DSA.</li>
                <li>Building projects that reflect practical problem solving.</li>
              </ul>
            </div>
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
                  <p>Email: hello@deepanshujangid.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-[1.75rem] border border-slate-800/90 bg-slate-900/80 p-8">
              <div className="space-y-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Want to connect?</p>
                <p className="text-lg font-medium text-slate-100">Send a message, request a resume, or say hello.</p>
                <a
                  href="mailto:hello@deepanshujangid.com"
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
