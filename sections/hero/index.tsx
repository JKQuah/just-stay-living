import SlideUpContainer from "@/components/molecule/slide-up-container";
import { Button } from "@/components/ui/button";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-secondary-light">
      <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 pb-28 items-center">
        <div className="space-y-12">
          <div className="space-y-4 font-staatliches">
            <SlideUpContainer delay={0}>
              <p className="uppercase text-xl text-secondary">Try it now</p>
            </SlideUpContainer>
            <SlideUpContainer delay={1}>
              <div className="text-primary uppercase text-5xl md:text-7xl space-y-4">
                <h1 className="text-primary">
                  Complete Home <br /> Solutions:
                </h1>
                <TextGenerateEffect
                  className="text-secondary"
                  words="Makeover & Rent"
                  duration={2}
                />

                <p className="!text-sm md:!text-xl leading-8 normal-case font-rubik text-foreground">
                  Managing your house units should be stress-free. At{" "}
                  <span className="font-bold text-primary">
                    Just Stay Living
                  </span>
                  , we give property owners the support to efficiently manage
                  their rentals, track tenants, and maximize income.
                </p>
              </div>
            </SlideUpContainer>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-8">
            <SlideUpContainer delay={2}>
              <Link href={"https://wa.me/601131916782"} target="__blank">
                <Button className="p-6 text-sm md:text-lg">
                  Click for Quotation
                </Button>
              </Link>
            </SlideUpContainer>
            <div>
              <SlideUpContainer delay={3}>
                <div className="flex-row-start gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} fill="#FFDF00" stroke="#FFDF00" />
                  ))}

                  <span className="text-sm">5 Stars</span>
                </div>
                <span className="text-sm">from 200+ reviews</span>
              </SlideUpContainer>
            </div>
          </div>
        </div>

        <SlideUpContainer delay={2}>
          {/* <DirectionAwareHover
            className="!w-full !h-full rounded-xl"
            imageUrl="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          >
            <p className="font-bold text-xl">Petaling Jaya</p>
            <p className="font-normal text-sm">
              Completion Time: 2 months 17 days
            </p>
          </DirectionAwareHover> */}
          <video
            src={"./hero.mp4"}
            width="600"
            height="150"
            controls={false}
            loop
            muted
            autoPlay
            playsInline
            className="h-[600px] w-full object-cover inset-0 object-top rounded-xl"
          />
        </SlideUpContainer>
      </div>
    </div>
  );
}
