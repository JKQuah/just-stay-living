import SlideUpContainer from "@/components/molecule/slide-up-container";
import Title from "@/components/molecule/title";
import { ShieldCheck, SplinePointer, ThumbsUp, Zap } from "lucide-react";

const contents = [
  {
    icon: <SplinePointer size={32} />,
    title: "One Stop Solution",
    description: `You don't need multiple vendors. We are your <strong>one trusted partner</strong>, providing peace of mind while your property works for you`,
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Guaranteed Loan Coverage",
    description: `Hand over your property to us, and never <strong>worry about your loan installments</strong> again. We'll take care of it while maximizing your returns.`,
  },
  {
    icon: <Zap size={32} />,
    title: "14 to 21 Days <br/> Express Renovation",
    description: `With our Express Renovation Program, your unit won't sit idle. Instead, it will be upgraded, attractive, and income-ready in <strong>less than a month</strong>.`,
  },
  {
    icon: <ThumbsUp size={32} />,
    title: "Hazard Free",
    description: `With our management approach, we ensure a <storng>safe, smooth, and hazard-free experience</strong> for every homeowner.`,
  },
];

export default function AboutUs() {
  return (
    <div className="bg-primary-light" id="about">
      <div className="relative max-container">
        {/* <Image
          src={
            "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          height={1080}
          width={2160}
          alt="about"
          className="h-[400px] w-7xl rounded-4xl object-cover brightness-50"
        /> */}

        <div className="rounded-4xl bg-white"></div>
      </div>
      <div className="max-container py-28 space-y-12">
        <Title
          heading={
            <span className="text-primary">
              Why <span className="text-secondary">Just Stay</span>?
            </span>
          }
          subtitle="Our founders had 17 years of experience in interior design & 8 years of experience in property management"
        />

        <div className="">
          {/* <SlideUpContainer delay={0}>
            <Image
              src={
                "https://images.unsplash.com/photo-1593012672015-4fabc32c67aa?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={2160}
              height={2160}
              alt="about-us"
              className="h-full rounded-lg object-cover"
            />
          </SlideUpContainer> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {contents.map((content, index) => (
              <SlideUpContainer key={index} delay={index + 1}>
                <div
                  className="bg-white shadow-xl rounded-lg p-12 text-center space-y-4 h-full"
                  key={index}
                >
                  <div className="bg-primary text-white rounded-full p-2 w-fit h-fit mx-auto">
                    {content.icon}
                  </div>
                  <h3
                    className="text-primary font-bold text-lg min-h-14 flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: content.title }}
                  ></h3>
                  {/* <p
                    className="text-sm leading-6"
                    dangerouslySetInnerHTML={{ __html: content.description }}
                  ></p> */}
                </div>
              </SlideUpContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
