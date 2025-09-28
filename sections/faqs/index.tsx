import SlideUpContainer from "@/components/molecule/slide-up-container";
import Title from "@/components/molecule/title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const items = [
  {
    title: "1. What types of properties do you provide makeover services for?",
    content:
      "We specialize in transforming residential properties such as condominiums, apartments. ",
  },
  {
    title: "2. How much does a property makeover cost?",
    content:
      "We provide customized quotations after understanding your needs and rental goals.",
  },
  {
    title: "3. What kind of rental returns can I expect after the makeover?",
    content:
      "Our makeovers are designed to increase rental value and attract quality tenants faster. In many cases, owners see higher rental rates compared to unfurnished or poorly presented units. ",
  },
  {
    title: "4. Who is the target tenant?",
    content:
      "Our role is to identify and attract the <b>best-fit tenant</b> for your property, we prefer students, working adults, and couplesWhat is Co-living?",
  },
  {
    title: "5. What is Co-living?",
    content:
      "Co-living is a modern housing concept where tenants rent <b>private bedrooms</b> while sharing <b>common spaces</b> such as the living room, kitchen, and facilities.",
  },
];

export default function Faqs() {
  return (
    <div className="bg-primary-light" id="faqs">
      <div className="max-container py-28 space-y-12">
        <Title
          heading={
            <span className="text-secondary">
              Frequently Asked <span className="text-primary">Questions</span>
            </span>
          }
          subtitle="Get started in minutes and manage your property from anywhere."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SlideUpContainer delay={2}>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="my-4 w-full space-y-2"
            >
              {items.map(({ title, content }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none rounded-md px-4 data-[state=open]:bg-gray-200"
                >
                  <AccordionTrigger className="data-[state=closed]:py-2 text-md font-bold text-primary">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p dangerouslySetInnerHTML={{ __html: content }}></p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SlideUpContainer>

          <SlideUpContainer delay={3}>
            <DirectionAwareHover
              className="!w-full !h-full rounded-xl"
              imageUrl="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
              <p className="font-bold text-xl">No worries. We got your back.</p>
              <p className="font-normal text-sm">
                Feel free to contact us if you have further question.
              </p>
            </DirectionAwareHover>
          </SlideUpContainer>
        </div>
      </div>
    </div>
  );
}
