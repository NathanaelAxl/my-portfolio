import { Github, Linkedin, Mail, ExternalLink, MapPin, Award } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30 scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
          <h1 className="font-bold text-xl tracking-tighter">Nathanael Axl Jaconiah</h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#certificates" className="hover:text-white transition">Certificates</a>
          </div>
          <button className="bg-[#1d1f24] hover:bg-[#2a2d35] px-5 py-2 rounded-lg text-sm font-semibold border border-white/10 transition">
            Contact
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">Nathanael Axl Jaconiah</h1>
        <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto">
          3rd-Year Informatics Student | Cybersecurity & AI Enthusiast
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-500 mt-4 mb-10">
          <MapPin size={18} />
          <span>South Tangerang, Banten, Indonesia</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <SocialLink href="https://github.com/" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:email@kamu.com" icon={<Mail size={20} />} label="Email" />
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="relative group mx-auto md:mx-0 w-64 md:w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/profiles.jpg"
              alt="Profile"
              className="relative rounded-full w-full aspect-square object-cover border-2 border-white/10"
            />
          </div>
          <div className="text-gray-400 text-lg leading-relaxed space-y-4">
            <p>
              A <strong>Purple Team</strong>Enthusiast with hands-on experience in defensive monitoring (Elastic, TheHive) and offensive testing (Kali, Burp Suite).
            </p>
            <p>
              I manage a personal home lab for security research and Cyber Threat Intelligence (CTI) analysis, dedicated to securing systems through a balanced, full-spectrum security approach.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-12">Work & Organizational Experience</h2>
        <div className="space-y-6">
          <ExperienceCard
            title="Back End Developer Intership"
            company="MobileCom"
            date="Jan 2026 - Present"
            desc="Contributed to the development and maintenance of server-side logic using Go, 
            optimizing database queries with PostgreSQL, and conducting rigorous API testing and debugging using Hoppscotch and Postman to ensure high-performance integration for remote-scale applications"
          />
          <ExperienceCard
            title="Laboratory Teaching Assistant"
            company="Universitas Multimedia Nusantara"
            date="Feb 2025 - July 2025"
            desc="Instructed the practical application and core concepts of Operating Systems."
          />
          <ExperienceCard
            title="Coding Mentor"
            company="Timedoor"
            date="Feb 2025 - Present"
            desc="Guiding and mentoring students in mastering Python programming fundamentals, 
            while simplifying complex coding concepts through hands-on projects in a hybrid learning environment.."
          />
          <ExperienceCard
            title="Head of Project Manager"
            company="HMIF Gen XV - UMN"
            date="Oct 2024 - Dec 2025"
            desc="Leading organizational programs and supervising technical development teams."
          />
          <ExperienceCard
            title="Head of PIC Perkenalan Prodi Informatika"
            company="PPIF UMN 2025"
            date="Mar 2025 - Agu 2025"
            desc="Led the Module Division to design and implement orientation programs for new Informatics students. Managed a team of student PICs, developed structured academic modules, and coordinated cross-division logistics to ensure a seamless transition for first-year students."
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="JelajahIsoematra"
            tags={["Next.js", "TailwindCSS"]}
            desc="A pixel-style educational game website focused on Indonesian culture and heritage."
          />
          <ProjectCard
            title="Spotify Popularity Predictor"
            tags={["Python", "Machine Learning"]}
            desc="A data science project predicting song popularity using machine learning models."
          />
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certificates" className="max-w-5xl mx-auto py-24 px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold">Certifications</h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* HCIA-openGauss V1.0 */}
          <CertificateCard
            title="HCIA-openGauss V1.0"
            issuer="Huawei"
            date="July 15, 2025"
            desc="Successfully completed the study and exam of HCIA-openGauss V1.0 Course."
            link="/certificates/huaweiV10.png"
          />

          {/* HCIA-AI V3.5 */}
          <CertificateCard
            title="HCIA-AI V3.5"
            issuer="Huawei"
            date="2025"
            desc="Certification in Artificial Intelligence foundations and Huawei AI solutions."
            link="/certificates/huaweiV35.png"
          />

          {/* Emergency Response Volunteer */}
          <CertificateCard
            title="Emergency Response Volunteer"
            issuer="UTDU UMN"
            date="Nov 27, 2025"
            desc="Active participation in campus-wide emergency response and safety simulations."
            link="/certificates/k3l.png"
          />

          {/* Python Intermediate */}
          <CertificateCard
            title="Python Intermediate"
            issuer="Sololearn"
            date="May 22, 2025"
            desc="Demonstrated theoretical and practical understanding of intermediate Python concepts."
            link="/certificates/python intermediate sololearn.pdf"
          />

          {/* Python Introduction */}
          <CertificateCard
            title="Python Introduction"
            issuer="Sololearn"
            date="Nov 18, 2025"
            desc="Foundational certification in Python programming and basic data structures."
            link="/certificates/python introduction sololearn.pdf"
          />

        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 text-gray-600">
        <div className="flex justify-center gap-6 mb-4">
          <Github size={18} className="hover:text-white cursor-pointer transition-colors" />
          <Linkedin size={18} className="hover:text-white cursor-pointer transition-colors" />
          <Mail size={18} className="hover:text-white cursor-pointer transition-colors" />
        </div>
        <p className="text-xs tracking-widest uppercase">© 2026 Nathanael Axl Jaconiah. All rights reserved.</p>
      </footer>
    </div>
  );
}

// REUSABLE COMPONENTS
function SocialLink({ icon, label, href }: { icon: any, label: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#12141a] border border-white/5 px-8 py-4 rounded-2xl hover:bg-[#1d1f24] hover:border-white/20 transition-all group">
      <span className="text-gray-400 group-hover:text-white transition-colors">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
}

function ExperienceCard({ title, company, date, desc }: any) {
  return (
    <div className="bg-[#0d0f14] border border-white/5 p-8 rounded-2xl hover:bg-[#111318] transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-blue-400 text-sm font-medium">{company}</p>
        </div>
        <span className="text-gray-500 text-sm font-mono bg-white/5 px-3 py-1 rounded-full">{date}</span>
      </div>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function ProjectCard({ title, tags, desc }: any) {
  return (
    <div className="group bg-[#0d0f14] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all flex flex-col h-full">
      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
      <div className="flex gap-2 mb-6 flex-wrap">
        {tags.map((t: string) => (
          <span key={t} className="bg-white/5 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full text-gray-400 font-bold border border-white/5">{t}</span>
        ))}
      </div>
      <p className="text-gray-400 mb-8 leading-relaxed flex-grow">{desc}</p>
      <div className="flex gap-6">
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"><Github size={16} /> Source</button>
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"><ExternalLink size={16} /> Demo</button>
      </div>
    </div>
  );
}

function CertificateCard({ title, issuer, date, desc, link }: any) {
  return (
    <div className="group bg-[#0d0f14] border border-white/5 p-6 rounded-2xl hover:bg-[#12141a] transition-all border-l-4 border-l-blue-600 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-blue-600/10 p-2 rounded-lg">
          <Award className="w-6 h-6 text-blue-500" />
        </div>
        <span className="text-gray-500 text-xs font-mono">{date}</span>
      </div>
      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-sm text-gray-400 mt-1 mb-3">{issuer}</p>
      <p className="text-xs text-gray-500 leading-relaxed flex-grow">{desc}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors group/link"
        >
          VIEW CERTIFICATE
          <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  );
}