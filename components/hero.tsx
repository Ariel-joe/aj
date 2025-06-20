import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 border-none text-white py-1 px-2">
          <Zap className="text-blue-300" />
          Fullstack Developer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Bringing Ideas to Life with Code & Creativity
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Hi, I&apos;m Ariel Joe, a full stack developer with a passion for
          building seamless user experiences. From web apps to automation
          projects, I turn ideas into reality— with a sprinkle of fun along the
          way! 🚀
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Explore my profile{" "}
            <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
