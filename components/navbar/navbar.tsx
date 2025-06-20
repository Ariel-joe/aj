import { Button } from "@/components/ui/button";
import { GithubLogo } from "../icons";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
// import { ModeToggle } from "../theme-toggler";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background/50 backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
            <a
              href={"https://github.com/Ariel-joe/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="h-5! w-5!" />
            </a>
          </Button>

            {/* <ModeToggle /> */}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
