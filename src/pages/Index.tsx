
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { DockNavigation } from "@/components/dock-navigation"
import { useEffect, useRef } from "react"
import { FileText, Download } from "lucide-react"

const projectData = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Led development of a real-time analytics platform with machine learning capabilities, serving 100k+ users.",
    tags: ["React", "Python", "TensorFlow", "AWS"]
  },
  {
    title: "Microservices Architecture",
    description: "Designed and implemented a scalable microservices architecture handling 1M+ daily requests.",
    tags: ["Node.js", "Docker", "Kubernetes", "gRPC"]
  },
  {
    title: "Fintech Payment Platform",
    description: "Built a secure payment processing system with blockchain integration and real-time fraud detection.",
    tags: ["Go", "PostgreSQL", "Redis", "Blockchain"]
  },
  {
    title: "Enterprise Search Engine",
    description: "Developed an AI-powered search engine with natural language processing capabilities.",
    tags: ["Elasticsearch", "Python", "NLP", "React"]
  }
]

const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "GraphQL"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Go", "Java", "PostgreSQL", "MongoDB"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"]
  },
  {
    category: "Architecture",
    skills: ["Microservices", "Event-Driven", "DDD", "TDD", "System Design"]
  }
]

const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Leading a team of 8 engineers, architecting cloud-native solutions."
  },
  {
    title: "Software Engineer",
    company: "Innovation Labs",
    period: "2019 - 2021",
    description: "Developed scalable microservices and real-time analytics systems."
  },
  {
    title: "Junior Developer",
    company: "StartUp Inc",
    period: "2018 - 2019",
    description: "Built and maintained full-stack web applications."
  }
]

const Index = () => {
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen w-full bg-background text-foreground">
        <ThemeToggle />
        
        <main className="container max-w-3xl mx-auto px-4 py-16">
          <section ref={addToRefs} className="slide-section space-y-4">
            <span className="text-sm font-medium px-4 py-1 rounded-full bg-primary/10 text-primary inline-block">
              Senior Software Engineer
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-xl">
              A passionate software engineer with 5+ years of experience in building scalable applications
              and leading development teams. Specialized in cloud architecture and modern web technologies.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </section>

          <section ref={addToRefs} className="slide-section mt-16">
            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectData.map((project, i) => (
                <div
                  key={project.title}
                  className="group p-5 rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                >
                  <h3 className="text-base font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section ref={addToRefs} className="slide-section mt-16">
            <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillsData.map((category) => (
                <div key={category.category} className="space-y-3">
                  <h3 className="text-lg font-medium text-primary">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 rounded-lg bg-secondary/50 text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section ref={addToRefs} className="slide-section mt-16">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div
                  key={exp.title}
                  className="p-5 rounded-lg border bg-card text-card-foreground"
                >
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-primary mt-1">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <DockNavigation />
      </div>
    </ThemeProvider>
  );
};

export default Index;
