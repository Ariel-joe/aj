import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>                               
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Kladi Outfits",
      description:
        "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "/kladi-outfits.png",
      technologies: [
        "Javascript",
        "React",
        "Stripe",
        "MongoDB",
        "Zustand",
        "Ant Design",
      ],
      liveUrl: "https://kladi-outfits.vercel.app/",
      githubUrl: "https://github.com/Ariel-joe/Ecommerce.git",
    },
    {
      title: "Osharide Carwash Management System",
      description:
        "A modern car wash management system that streamlines operations by enabling detailers to log customer car details while allowing managers to review and approve entries efficiently.",
      image: "/osharide.png",
      technologies: ["React", "Tailwindcss", "Epress.js", "Node.js", "MongoDB"],
      liveUrl: "https://osharide.vercel.app/",
      githubUrl: "https://github.com/Ariel-joe/car-wash-react.git",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Most Recent Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="max-w-screen-md mx-auto">
          <Button
            variant="outline"
            className="rounded-full shadow-none w-full"
            asChild
          >
            <a
              href={"https://github.com/Ariel-joe/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="mr-1 h-4 w-4" />
              View my github for More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
