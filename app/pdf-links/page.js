// app/page.js

const pdfLinks = [
  {
    title: "Atención 24/7 Jetsmart Chile",
    url: "https://aerocartrips.com/Atención-24-7-Jetsmart-Chile-1779710583.pdf",
  },
  {
    title: "Cuánto tarda JET SMART en responder",
    url: "https://aerocartrips.com/Cuánto-tarda-JET-SMART-en-​responder-través-1779710586.pdf",
  },
  {
    title: "Cómo puedo hablar con el ejecutivo de Jet smart",
    url: "https://aerocartrips.com/Cómo-puedo​-hablar-con-el-ejecutivo-de-Jet-smart-1779710585.pdf",
  },
  {
    title: "GUÍA!! Jetsmart Teléfono Chile",
    url: "https://aerocartrips.com/GUÍA!!-Jetsmart-Teléfono-Chile-1779710582.pdf",
  },
  {
    title: "Hablar con una persona de Jet smart",
    url: "https://aerocartrips.com/hablar-con-una-persona-de-Jet-smart-1779710584.pdf",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          PDF Links Page
        </h1>

        <div className="grid gap-4">
          {pdfLinks.map((pdf, index) => (
            <a
              key={index}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition border border-gray-200 hover:border-blue-500"
            >
              <h2 className="text-lg font-semibold text-blue-600">
                {pdf.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1 break-all">
                {pdf.url}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
