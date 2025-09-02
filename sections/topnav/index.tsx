import SlideUpContainer from "@/components/molecule/slide-up-container";
import Logo from "@/components/ui/logo";
import CallToAction from "@/sections/topnav/call-to-action";
import Menubar from "@/sections/topnav/menubar";
import Navigation from "@/sections/topnav/navigation";
import { Fragment } from "react";

export default function TopNav() {
  return (
    <Fragment>
      <div className="bg-secondary-light">
        <div className="flex-row-between p-4 max-container">
          <div className="flex-row-start gap-8">
            <SlideUpContainer delay={0}>
              <Logo />
            </SlideUpContainer>
            <Navigation />
          </div>
          <CallToAction />

          <Menubar />
        </div>
      </div>
    </Fragment>
  );
}
