import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomNavbar from "./components/Navbar";
import AddBootstrap from "./BootstrapClient";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Personite Portfolio Generator",
  icons: {
    icon: "/logo.png",
  },
  description:
    "A dynamic React app to create personal portfolio websites. Users can choose templates, fill multi-section forms, and view professional portfolio pages with real-time API-based data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AddBootstrap />
        <CustomNavbar />

        <main className="mt-12">{children}</main>
      </body>
    </html>
  );
}
