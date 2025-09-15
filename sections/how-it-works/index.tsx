import SlideUpContainer from "@/components/molecule/slide-up-container";
import Title from "@/components/molecule/title";
import {
  BrickWall,
  BrushCleaning,
  Cog,
  HandHeart,
  Home,
  ScrollText,
  Store,
} from "lucide-react";

const steps = [
  {
    icon: <Home size={32} />,
    title: "Vacant Possession",
  },
  {
    icon: <BrushCleaning size={32} />,
    title: "Defect Check",
  },
  {
    icon: <BrickWall size={32} />,
    title: "Renovation",
  },
  {
    icon: <Store size={32} />,
    title: "Marketing",
  },
  {
    icon: <ScrollText size={32} />,
    title: "Tenancy Agreement",
  },
  {
    icon: <HandHeart size={32} />,
    title: "Handover",
  },
  {
    icon: <Cog size={32} />,
    title: "Ongoing Management",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-secondary-light" id="how-it-works">
      <div className="max-container pt-28 space-y-12">
        <Title
          heading={
            <span className="text-primary">
              How <span className="text-secondary">It Works</span>?
            </span>
          }
          subtitle="We complete every step carefully."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            return (
              <SlideUpContainer key={index} delay={index}>
                <div className="space-y-4 bg-white shadow-sm md:shadow-lg hover:shadow-2xl hover:scale-105 p-6 py-8 w-full h-full flex flex-col justify-center">
                  <p className="uppercase text-xs">Step {index + 1}</p>
                  <div className="flex flex-row gap-4 items-center flex-1">
                    <p className="text-secondary">{step.icon}</p>
                    <h3 className="text-secondary font-bold text-lg">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </SlideUpContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
}
