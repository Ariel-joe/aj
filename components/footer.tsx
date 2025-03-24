import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BlueSkyLogo, DribbleLogo, GithubLogo, XLogo } from "./icons";

const footerLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Ariel Joe. All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
          <ul className="flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
