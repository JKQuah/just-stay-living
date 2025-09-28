import SlideUpContainer from "@/components/molecule/slide-up-container";
import Title from "@/components/molecule/title";
import Image from "next/image";

const teams = [
  {
    imageUrl: "/accountant.png",
    title: "Accountant",
    subtitle: "2 years of professionalism",
    description:
      "Ensuring transparent, accurate, and efficient financial management for property owners.",
  },
  {
    imageUrl: "/designer.png",
    title: "Interior Designer",
    subtitle: "17 years of experience",
    description:
      "Crafting functional and aesthetically appealing spaces that attract tenants and increase property value.",
  },
  {
    imageUrl: "/property.png",
    title: "Property Agent",
    subtitle: "8 years of expertise",
    description:
      "Offering deep insights into market trends, rental demand, and strategic positioning to ensure optimal occupancy rates.",
  },
];

export default function Team() {
  return (
    <div className="bg-white py-28" id="about">
      <div className="relative max-container">
        <Title
          heading={
            <span className="text-secondary">
              About <span className="text-primary">Us</span>
            </span>
          }
          subtitle="Just Stay Living is a property management team that transforms ordinary units into vibrant shared homes. We manage everything from renovation, tenant matching, to hassle-free rental services."
        />

        <div className="my-16 p-16 pb-4 rounded-lg bg-secondary-light relative">
          <div className="space-y-8">
            <SlideUpContainer delay={0}>
              <div className="space-y-2">
                <h3 className="font-bold text-secondary text-lg">
                  Just Stay Living Sdn. Bhd.
                </h3>
                <p className="leading-8">
                  A one-stop property management company dedicated to helping
                  property owners maximize the value and potential of their
                  investments. We provide end-to-end solutions covering every
                  aspect of property management — from design and renovation to
                  marketing, leasing, and financial management.
                </p>
              </div>
            </SlideUpContainer>

            <SlideUpContainer delay={1}>
              <div className="space-y-2">
                <h3 className="font-bold text-secondary text-lg">Our Goals</h3>
                <p className="leading-8 max-w-full md:max-w-[80%]">
                  Provide property owners with peace of mind and profitable
                  returns, while offering tenants beautifully designed,
                  well-managed living spaces that feel like home.
                </p>
              </div>
            </SlideUpContainer>

            <Image
              src={"/house.png"}
              alt="about-us"
              width={1080}
              height={1080}
              className="absolute bottom-0 right-0 w-48"
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {teams.map((team, index) => (
              <SlideUpContainer delay={index + 1} key={team.title}>
                <div className="space-y-8 text-center">
                  <Image
                    src={team.imageUrl}
                    alt={team.title.toLowerCase().replaceAll(" ", "-")}
                    width={1080}
                    height={1080}
                    className="w-32 h-32 mx-auto"
                  />

                  <div className="space-y-2">
                    <h4 className="font-bold text-secondary text-lg">
                      {team.title}
                    </h4>
                    <p className="text-gray-400">{team.subtitle}</p>
                  </div>
                  <p className="leading-7 px-6">{team.description}</p>
                </div>
              </SlideUpContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
