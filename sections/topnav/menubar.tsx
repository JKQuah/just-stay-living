"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CtaButton } from "@/sections/topnav/call-to-action";
import { NavList } from "@/sections/topnav/navigation";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="hover:bg-gray-200 md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Main Menu</DialogTitle>
          <NavList onHandleClose={() => setIsOpen(false)} />
          <CtaButton />
        </DialogContent>
      </Dialog>
    </>
  );
}
