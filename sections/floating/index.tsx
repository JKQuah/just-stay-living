import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-8 right-8 md:bottom-20 md:right-20 z-10 bg-primary p-4 rounded-full hover:shadow-2xl hover:bg-primary/90">
      <Link href="https://wa.me/601131916782" target="__blank">
        <Image
          src={"/whatsapp.png"}
          width={512}
          height={512}
          alt="whatsapp-icon"
          className="h-12 w-12 invert-100"
        />
      </Link>
    </div>
  );
}
