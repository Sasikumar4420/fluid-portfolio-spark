import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { DockNavigation } from "@/components/dock-navigation";
import { useEffect, useRef } from "react";
import { FileText, Download } from "lucide-react";
const projectData = [{
  title: "Citibank",
  description: "As a part of Data Quality Engine team, handled the functional requirements of the APAC region. Notable contributions include working on MT-MX Translator, FlexiCube Integration and enhancing data quality throughout components",
  tags: ["Java", "Spring", "Kafka","Microservices","MongoDB","CI/CD","Kibana"]
}, {
  title: "Royal Bank of Scotland International",
  description: "Developed several validations as per functional requirements, thereby ensuring proper transactions end-to-end. Notable works were on FX validations , Payment Pre-processing and Business Rules.",
  tags: ["Java", "Spring", "MySQL", "Active MQ","Volante Designer","Kibana"]
}, {
  title: "Munich Re",
  description: "Worked on insurance claims, bills and processes and provided assistance by enhancing code quality and vigorous test implementations",
  tags: ["Guidewire","MySQL"]
}];
const skillsData = [{
  category: "Frontend",
  skills: ["HTML", "CSS", "JavaScript", "GraphQL"]
}, 
{
  category: "Backend",
  skills: ["Java", "SpringBoot"]
}, 
{
  category: "DataBase",
  skills: ["MySQL" , "MongoDB", "Redis"]
},
{
  category: "Messaging and Streaming",
  skills: ["Apache Kafka", "Apache Pulsar", "IBM MQ", "Active MQ"]
},
{
  category: "DevOps & Cloud",
  skills: ["OpenShift", "Docker", "Jenkins", "CI/CD"]
}, {
  category: "Architecture",
  skills: ["Microservices", "Event-Driven","System Design"]
}];
const experienceData = [
  {
    title: "Software Engineer",
    company: "HCL Technologies",
    period: "2024 - Present",
    description: "As an SDE for the client - CitiBank, Designed and implemented a scalable microservices architecture handling 1M+ daily requests. Engineering MT-MX translation using Java, Spring Boot and Kafka for real-time communication with cross-functional services. Optimized API integrations, enhancing transaction efficiency and interoperability across Citibank’s global financial network.Developed AI-driven monitoring and fraud detection systems, proactively mitigating risks and ensuring zero downtime in critical payment flows. Worked with cross-functional teams, driving innovation and aligning development with banking regulations, financial compliance, and industry best practices",

  },
  {
  title: "Software Engineer",
  company: "HCL Technologies",
  period: "2021 - 2024",
  description: "As an SDE for the client - Royal Bank of Scotland International, architected and optimized the VolPay application, successfully mapping 86.5% of Swift MT to PACS messages and integrating client-specific collection objects. Designed and implemented enterprise-grade monitoring solutions, reducing system downtime by 94.2% through advanced logging and real-time issue detection. Developed a flexible business rules engine, enabling clients to define custom validations, significantly reducing maintenance costs by 76.4% and enhancing adaptability.Established coding best practices and rigorous testing frameworks, ensuring 90%+ code coverage, improving system reliability, and reinforcing compliance with industry standards"
}
, {
  title: "Software Engineer Trainee",
  company: "HCL Technologies",
  period: "2021",
  description: "As an SDE for the client - Munich Re, developed and customized Guidewire solutions for policy administration and claims processing, improving operational efficiency.Implemented business rules and workflows, ensuring accurate risk assessment and policy underwriting.Optimized system performance and reliability, reducing processing delays in claims and policy management.Worked closely with stakeholders to align development with business needs and regulatory requirements",

}];
const Index = () => {
  const sectionRefs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };
  return <ThemeProvider defaultTheme="system">
      <div className="min-h-screen w-full bg-background text-foreground">
        <ThemeToggle />
        
        <main className="container max-w-3xl mx-auto px-4 py-16">
          <section ref={addToRefs} className="slide-section space-y-4">
            <span className="text-sm font-medium px-4 py-1 rounded-full bg-primary/10 text-primary inline-block">
              Software Engineer
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Hi, I'm <span className="text-primary font-bold">Sasikumar Elumalai</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-0 px-0 py-0 text-base font-normal">Greetings! I'm Sasikumar, a seasoned Full Stack Java Developer and Software Engineer dedicated to driving innovation through technology solutions.My expertise lies in architecting end-to-end web applications, with a focus on backend development using Core Java, Spring Boot, and RESTful web services. I bring a wealth of experience in frontend technologies such as HTML, CSS and JavaScript enabling me to deliver intuitive user interfaces that elevate user experiences.</p>
            <div className="flex gap-4 mt-6">
              <a href="https://drive.google.com/file/d/16aVsch4-RSlUxFR25p-k3sPY0-9gj-GE/view?usp=drive_link" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <FileText className="w-4 h-4" />
                View Resume
              </a>
              <a href="https://drive.google.com/uc?export=download&id=16aVsch4-RSlUxFR25p-k3sPY0-9gj-GE" download className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </section>

          <section ref={addToRefs} className="slide-section mt-16">
            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectData.map((project, i) => <div key={project.title} className="group p-5 rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                  <h3 className="text-base font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                        {tag}
                      </span>)}
                  </div>
                </div>)}
            </div>
          </section>

          <section ref={addToRefs} className="slide-section mt-16">
            <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillsData.map(category => <div key={category.category} className="space-y-3">
                  <h3 className="text-lg font-medium text-primary">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => <span key={skill} className="text-sm px-3 py-1 rounded-lg bg-secondary/50 text-secondary-foreground">
                        {skill}
                      </span>)}
                  </div>
                </div>)}
            </div>
          </section>

          <section ref={addToRefs} className="slide-section mt-16">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <div className="space-y-6">
              {experienceData.map(exp => <div key={exp.title} className="p-5 rounded-lg border bg-card text-card-foreground">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-primary mt-1">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {exp.description}
                  </p>
                </div>)}
            </div>
          </section>
        </main>

        <DockNavigation />
      </div>
    </ThemeProvider>;
};
export default Index;