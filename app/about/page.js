import AboutSection from "@/components/AboutSection";

export default function Page() {
  return (
    <div className="px-4 ">
      {/* Hero Section */}

      <div className="min-h-[95vh] w-full flex justify-center items-center">
        <div>
          <div className="text-4xl md:text-6xl text-center">Aerocartrips Private Limited</div>
          <p className="text-center py-8">
            We are enthusiastic to provide help, support, and guidance to
            everyone, ensuring satisfaction outcomes always.
          </p>
        </div>
      </div>
      <AboutSection />
    </div>
  );
}
