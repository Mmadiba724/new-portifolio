import Button from "@/components/Button";
import { Menu, MenuSquare, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent px-5"} border-none z-50`}
    >
      <nav className="container h-16 mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl tracking-tight hover:text-primary font-bold"
        >
          <span className="flex items-center">
            {/* large screens only */}
            <img
              src="/logo.png"
              alt="logo"
              className="hidden lg:block h-20 mt-9 w-auto object-contain brightness-200"
            />
            {/* small screens only */}
            <img
              src="/logo2.png"
              alt="logo"
              className="block lg:hidden h-20 mt-10 w-auto object-contain brightness-200"
            />
          </span>{" "}
          <span className="text-primary">.</span>{" "}
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    isActive
                      ? "text-primary bg-surface font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* call to action btn */}
        <div className="hidden md:block">
          <a href="#contact"><Button size="sm">Contact Me</Button></a>
        </div>

        {/* mobile menu btn */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground cursor-pointer"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 ">
            {navLinks.map((link, index) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  className={`text-lg py-2 transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}

            <Button onClick={() => setIsMobileMenuOpen(false)}  >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
