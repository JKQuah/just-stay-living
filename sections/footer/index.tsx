import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <div className="bg-primary-light pt-28">
      <div className="max-container flex flex-col md:flex-row md:justify-between gap-4 items-end md:pb-14 pb-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-full md:max-w-2/3">
            Our founders had 17 years of experience in interior design & 8 years
            of experience in property management
          </p>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Just Stay Living. All rights reserved.
        </p>
      </div>
    </div>
  );
}
