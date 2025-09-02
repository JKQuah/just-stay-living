import SlideUpContainer from "@/components/molecule/slide-up-container";
import Link from "next/link";

const navigations = [
  { name: "Why Us", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Our Services", href: "#services" },
  { name: "FAQs", href: "#faqs" },
];

export function NavList({ onHandleClose }: { onHandleClose?: () => void }) {
  return navigations.map((item, index) => (
    <SlideUpContainer key={item.name} delay={index}>
      <Link href={item.href} onClick={onHandleClose}>
        <p className="text-black text-md p-2 pb-4 hover:border-b-2 hover:border-black hover:font-bold border-b-2 border-transparent min-w-32 text-center">
          {item.name}
        </p>
      </Link>
    </SlideUpContainer>
  ));
}

export default function Navigation() {
  return (
    <div className="flex-row gap-8 hidden md:flex">
      <NavList />
    </div>
  );
}
