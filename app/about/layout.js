

export const metadata = {
  title: "Aerocartrips",
  description: "Aerocartrips about page ready help world",
  charset: "utf-8",
  keywords:
    "aerocartrips,aerocartrips about, aero, aero car trips, aerotrips",
  robots: "index, follow",
  alternates: {
    canonical: "https://aerocartrips.com/about",
  },
};

export default function RootLayout({ children }) {
  return (
      <div>
        {children}
      </div>
  );
}
