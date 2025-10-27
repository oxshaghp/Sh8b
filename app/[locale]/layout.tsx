import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import LeftContent from "@/components/LeftContent";
import AnimatedCursor from "@/components/ui/AnimatedCursor";
import LenisProvider from "@/components/ui/LenisProvider";
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SH8B | Software Engineer",
  description:
    "Abdullah is a Software Engineer specialized in full-stack web development. I build complete and scalable web applications with a focus on performance, security, and great user experience. Helping individuals and businesses bring their digital ideas to life.",
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LenisProvider>
              <div className="flex flex-col sm:flex-row min-h-screen">
                <AnimatedCursor />
                {/* Sidebar */}
                <aside className="w-full sm:w-[200px] shrink-0">
                  <LeftContent />
                </aside>

                {/* Main Content */}
                <section className="flex-1 min-h-screen relative p-6 overflow-y-auto bg-grid">
                  <div className="relative z-10">{children}</div>
                </section>
              </div>
            </LenisProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
