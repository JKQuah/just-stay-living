import SlideUpContainer from "@/components/molecule/slide-up-container";
import Title from "@/components/molecule/title";

const services = [
  {
    title: "Renovation & Furnishing Included",
    subtitle: "",
    points: [
      "Plan interior design based on rental strategy",
      "Renovation works (built-ins, flooring, lighting, painting, etc.)",
      "Install essential appliances (aircon, water heater, fridge, washer, WiFi)",
      "Furnishings (bed, sofa, dining, curtains, etc.)",
    ],
  },
  {
    title: "Project Coordination & Management",
    subtitle: "",
    points: [
      "We ensure every home makeover project is handled seamlessly, giving homeowners complete peace of mind.",
    ],
  },
  {
    title: "Other Value-Added Rental Services",
    subtitle: "",
    points: [
      "Our trusted property managers save you time, cut unnecessary costs, and eliminate hassles—making sure your rent-ready unit attracts the right tenants quickly.",
    ],
  },
];

export default function OurServices() {
  return (
    <div className="bg-secondary-light" id="services">
      <div className="max-container py-28 space-y-12">
        <Title
          heading={
            <span className="text-primary">
              Our <span className="text-secondary">Services</span>
            </span>
          }
          subtitle="From listing your unit to managing your income, we've got you covered."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <SlideUpContainer key={index} delay={index}>
              <div className="space-y-2">
                <span className="text-4xl font-bold text-secondary">
                  {index + 1}.
                </span>
                <h3 className="font-bold text-lg text-secondary">
                  {service.title}
                </h3>
                <ul className="list-disc pl-4 space-y-2">
                  {service.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </SlideUpContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
