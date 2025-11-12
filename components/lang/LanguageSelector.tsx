"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PageLoader from "@/components/ui/PageLoader";

// 🇺🇸 علم أمريكا
const USFlag = () => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="15" fill="#B22234" />
    <rect width="20" height="1.15" fill="white" />
    <rect y="2.3" width="20" height="1.15" fill="white" />
    <rect y="4.6" width="20" height="1.15" fill="white" />
    <rect y="6.9" width="20" height="1.15" fill="white" />
    <rect y="9.2" width="20" height="1.15" fill="white" />
    <rect y="11.5" width="20" height="1.15" fill="white" />
    <rect y="13.8" width="20" height="1.15" fill="white" />
    <rect width="7.7" height="8.05" fill="#3C3B6E" />
  </svg>
);

// 🇪🇬 علم مصر
const EgyptFlag = () => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="5" fill="#CE1126" />
    <rect y="5" width="20" height="5" fill="white" />
    <rect y="10" width="20" height="5" fill="#000000" />
    <g transform="translate(6, 2.5)">
      <circle cx="4" cy="2.5" r="2" fill="#000000" />
      <circle cx="4" cy="2.5" r="1.2" fill="white" />
      <circle cx="4" cy="2.5" r="0.6" fill="#000000" />
    </g>
  </svg>
);

const languages = [
  { code: "en", name: "English", flag: <USFlag /> },
  { code: "ar", name: "العربية", flag: <EgyptFlag /> },
];

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isChanging, setIsChanging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  const handleLanguageChange = async (newLocale: string) => {
    if (newLocale === locale) return;

    setIsChanging(true);
    setLoading(true);

    // إزالة المسار الحالي من اللغة القديمة
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    // تأخير بسيط لإظهار اللودينج
    await new Promise((resolve) => setTimeout(resolve, 500));

    router.push(newPath);
  };

  useEffect(() => {
    if (pathname !== currentPath) {
      setCurrentPath(pathname);
      setLoading(false);
      setIsChanging(false);
    }
  }, [pathname, currentPath]);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <>
      {/* ✅ اللودينج */}
      <AnimatePresence>
        {loading && <PageLoader isLoading={loading} />}
      </AnimatePresence>

      {/* ✅ مكوّن اللغة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Select value={locale} onValueChange={handleLanguageChange}>
          <SelectTrigger
            className={`w-[140px] transition-all duration-300 ${
              isChanging ? "opacity-50 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <SelectValue>
              <div className="flex items-center gap-2">
                <div>{currentLanguage?.flag}</div>
                <span className="text-sm font-medium">
                  {currentLanguage?.name}
                </span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {languages.map((language) => (
              <SelectItem key={language.code} value={language.code}>
                <div className="flex items-center gap-2">
                  <div>{language.flag}</div>
                  <span className="text-sm">{language.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>
    </>
  );
}
