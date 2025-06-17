import Image from "next/image";

const features = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    title: "JavaScript Proficiency",
    description:
      "Extensive experience in developing dynamic web applications and automation scripts using core JavaScript principles.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    title: "TypeScript Expertise",
    description:
      "Implementation of strongly typed solutions for enhanced code maintainability and error prevention in complex projects.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    title: "Python Automation and Scripting",
    description:
      "Utilization of Python for backend automation, data processing, and exploratory projects in artificial intelligence.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "React.js UI Development",
    description:
      "Development of high-performance, interactive user interfaces leveraging React.js hooks, state management, and component architecture.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    title: "Next.js Full-Stack Applications",
    description:
      "Building scalable, SEO-optimized full-stack applications with Next.js, utilizing server-side rendering and static site generation.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    title: "Tailwind CSS Styling",
    description:
      "Rapid development of responsive and modern user interfaces with Tailwind CSS, emphasizing utility-first design principles.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        My Tech Stack
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
