import SlideUpContainer from "@/components/molecule/slide-up-container";
import Title from "@/components/molecule/title";
import { Clock9, MapPin } from "lucide-react";
import Link from "next/link";

const contacts = [
  {
    icon: <MapPin />,
    title: "Visit Us",
    description: [
      "Just Stay Sdn Bhd",
      "47-03, Jalan Kenari 19a, Bandar Puchong Jaya, 47100 Puchong, Selangor",
    ],
    link: "https://maps.app.goo.gl/5JdjTgRsQmQXd9yKA",
  },
  {
    icon: <Clock9 />,
    title: "Business Hour",
    description: ["Monday - Sunday", "09:00am - 06:00pm"],
    link: undefined,
  },
  {
    icon: <Clock9 />,
    title: "Whatsapp Us",
    description: ["011-3191 6782"],
    link: "https://wa.me/601131916782",
  },
  {
    icon: <Clock9 />,
    title: "Email Us",
    description: ["enquiry@juststayliving.com"],
    link: "mailto:enquiry@juststayliving.com",
  },
];

export default function Contact() {
  return (
    <div className="bg-secondary-light" id="contact-us">
      <div className="max-container py-28 space-y-12">
        <Title
          heading={
            <span className="text-primary">
              Get In <span className="text-secondary">Touch</span>
            </span>
          }
          subtitle="We're ready to help you manage your property — stress-free."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SlideUpContainer delay={1}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1865487000823!2d101.62044587485335!3d3.044631153786491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b5a72efe1b7%3A0x1f09e4b61d43e540!2s47-03%2C%20Jalan%20Kenari%2019a%2C%20Bandar%20Puchong%20Jaya%2C%2047100%20Puchong%2C%20Selangor!5e0!3m2!1sen!2smy!4v1756726452621!5m2!1sen!2smy"
              width="600"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 rounded-2xl w-full"
            ></iframe>
          </SlideUpContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 items-center">
            {contacts.map((contact, index) => (
              <SlideUpContainer key={index} delay={index + 2}>
                <div className="space-y-4">
                  <div className="bg-secondary w-fit p-2 rounded-full text-white">
                    {contact.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-secondary">
                      {contact.title}
                    </h3>
                    {contact.link ? (
                      <Link
                        href={contact.link ?? ""}
                        target="__blank"
                        className="hover:underline"
                      >
                        {contact.description.map((item, ind) => (
                          <p className="text-sm leading-6" key={ind}>
                            {item}
                          </p>
                        ))}
                      </Link>
                    ) : (
                      contact.description.map((item, ind) => (
                        <p className="text-sm leading-6" key={ind}>
                          {item}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              </SlideUpContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
