import SlideUpContainer from "@/components/molecule/slide-up-container";

interface ITitle {
  heading: string | React.ReactNode;
  subtitle: string | React.ReactNode;
}

export default function Title({ heading, subtitle }: ITitle) {
  return (
    <div className="">
      <SlideUpContainer delay={1}>
        <h2 className="text-[28px] font-bold">{heading}</h2>
      </SlideUpContainer>
      <SlideUpContainer delay={2}>
        <p className="text-[16px] text-foreground">{subtitle}</p>
      </SlideUpContainer>
    </div>
  );
}
