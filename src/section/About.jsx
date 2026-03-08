import { Code2, Database, GitBranch, Terminal, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Modern Frontend Stack",
    description:
      "Proficient in building responsive, component-based UIs using React, HTML5, and CSS3 with a focus on clean, maintainable code.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description:
      "Experienced with Git workflow and GitHub collaboration, including branching, pull requests, and resolving merge conflicts.",
  },
  {
    icon: Database,
    title: "Backend Fundamentals",
    description:
      "Familiar with RESTful API integration, Node.js basics, and managing data with SQL or NoSQL databases like MongoDB.",
  },
  {
    icon: Zap,
    title: "Agile Learner",
    description:
      "Demonstrated ability to quickly pick up new frameworks and documentation, moving from 'Hello World' to implementation in record time.",
  },
  {
    icon: Terminal,
    title: "Problem Solving",
    description:
      "Strong foundation in data structures and algorithms, with a knack for debugging and optimizing logic for better performance.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid  lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,{" "}
              <span className="text-white font-serif italic font-normal">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                As a <strong>Full-Stack Developer</strong> specializing in the
                JavaScript ecosystem, I bridge the gap between complex backend
                logic and seamless user experiences. My technical journey is
                defined by a transition from curious tinkerer to a disciplined
                engineer who values <strong>clean architecture</strong> and the
                "Don't Repeat Yourself" (DRY) principle. I have cultivated a
                robust foundation in modern frameworks like React and Next.js,
                allowing me to build performant, SEO-friendly web applications
                that prioritize the end-user's journey from the first click to
                the final interaction.
              </p>

              <p>
                My development philosophy centers on{" "}
                <strong>technical agility and code integrity</strong>. I am
                deeply familiar with the nuances of asynchronous programming,
                state management, and the integration of RESTful services into
                fluid frontend architectures. Beyond the code itself, I advocate
                for high standards in the development workflow—utilizing Git for
                precise version control, participating in rigorous peer code
                reviews, and writing <strong>semantic, accessible HTML</strong>{" "}
                to ensure the web remains open to everyone. I don't just solve
                the ticket; I aim to understand the underlying "why" to prevent
                technical debt down the road.
              </p>

              <p>
                Currently, I am focused on mastering <strong>TypeScript</strong>{" "}
                to bring type-safety to my builds and exploring the efficiencies
                of containerization with Docker. I am a proactive communicator
                who thrives in Agile environments, where rapid iteration and
                cross-functional collaboration are the keys to success. My
                ultimate goal is to contribute to a high-growth engineering team
                where I can leverage my problem-solving mindset to tackle
                high-impact challenges while continuously evolving my craft
                alongside industry veterans.
              </p>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to create digital experiences that are not just
                  functional, but truly delightful — products that users love to
                  use and developers love to maintain."
                </p>
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  {" "}
                  <item.icon className="w-6 h-6 text-primary" />{" "}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
