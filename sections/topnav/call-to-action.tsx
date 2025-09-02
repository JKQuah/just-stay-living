import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CtaButton() {
  return (
    <Link href={"#contact-us"}>
      <Button
        className="!p-6 hover:cursor-pointer w-full md:w-fit
      "
      >
        Contact Us <ArrowUpRight />
      </Button>
    </Link>
  );
}

export default function CallToAction() {
  return (
    <div className="hidden md:block">
      <CtaButton />
    </div>
  );
}
