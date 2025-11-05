import AboutSection from "@/components/AboutSection";

export default function Page() {
  return (
    <div className="px-4 ">
      {/* Hero Section */}

      <div className="min-h-[95vh] flex justify-center items-center">
        <div>
          <h1 className="text-6xl text-center">Aerocartrips Private Limited</h1>
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
