
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { DockNavigation } from "@/components/dock-navigation"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen w-full bg-background text-foreground">
        <ThemeToggle />
        
        <main className="container max-w-3xl mx-auto px-4 py-16">
          <section className="space-y-4 animate-fade-in">
            <span className="text-sm font-medium px-4 py-1 rounded-full bg-primary/10 text-primary inline-block">
              Software Developer
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-xl">
              A passionate software developer crafting beautiful and functional web experiences.
              I specialize in modern web technologies and user-centric design.
            </p>
          </section>

          <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group p-4 rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-base font-semibold mb-2">Project {i}</h3>
                <p className="text-sm text-muted-foreground">
                  A brief description of your amazing project goes here.
                </p>
              </div>
            ))}
          </section>
        </main>

        <DockNavigation />
      </div>
    </ThemeProvider>
  );
};

export default Index;
