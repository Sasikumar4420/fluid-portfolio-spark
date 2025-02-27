
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { DockNavigation } from "@/components/dock-navigation"

const projectData = [
  {
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented secure payment processing and real-time inventory management.",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Developed a responsive dashboard with ML-powered insights, real-time data visualization, and customizable widgets.",
    tags: ["Python", "React", "TensorFlow"]
  },
  {
    title: "Cloud Infrastructure Migration",
    description: "Led the migration of legacy systems to AWS, improving scalability and reducing operational costs by 40%.",
    tags: ["AWS", "Docker", "Kubernetes"]
  },
  {
    title: "Mobile Banking Application",
    description: "Created a secure mobile banking app with biometric authentication and real-time transaction processing.",
    tags: ["React Native", "Node.js", "PostgreSQL"]
  }
]

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen w-full bg-background text-foreground">
        <ThemeToggle />
        
        <main className="container max-w-3xl mx-auto px-4 py-16">
          <section className="space-y-4 animate-fade-in">
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
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectData.map((project, i) => (
                <div
                  key={project.title}
                  className="group p-5 rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h3 className="text-base font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "Frontend Development",
                "Backend Architecture",
                "Cloud Solutions",
                "DevOps & CI/CD",
                "System Design",
                "Team Leadership"
              ].map((skill, i) => (
                <div
                  key={skill}
                  className="p-3 rounded-lg bg-secondary/50 text-secondary-foreground text-sm font-medium text-center animate-fade-in-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {skill}
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
