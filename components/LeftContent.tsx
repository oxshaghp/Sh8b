"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FolderIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import ThemeButton from "./ui/ThemeButton";
import LanguageSelector from "./lang/LanguageSelector";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

function LeftContent() {
  const t = useTranslations("LeftContent");
  const [open, setOpen] = useState(false); // Handle mobile drawer toggle

  return (
    <>
      {/* ===================== Sidebar (Desktop & Tablet) ===================== */}
      <div
        className="
          hidden md:flex
          flex-col items-center justify-between
          h-full
          fixed 
          w-[200px]
          bg-white dark:bg-black
          transition-all duration-300
          overflow-hidden
        "
      >
        {/* Top Section */}
        <motion.div
          className="flex flex-col items-center justify-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Profile Image */}
          <motion.div
            className="mt-5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/me.jpg"
              alt="profile"
              width={70}
              height={70}
              className="rounded-full"
            />
          </motion.div>

          {/* Name & Job */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-2xl font-bold mt-3">{t("name")}</h1>
            <p className="text-sm text-gray-400 font-medium my-2">{t("job")}</p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex items-center justify-center gap-3 my-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              {
                href: "https://www.linkedin.com/in/abdullah-atef-b2061a324/",
                img: "linkedin.png",
              },
              { href: "https://wa.me/201157713042", img: "whatsapp.jpg" },
              { href: "https://github.com/oxshaghp", img: "github.png" },
              {
                href: "https://leetcode.com/u/bdallhalbnt/",
                img: "leetcode.webp",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href}>
                  <Image
                    src={`/images/${item.img}`}
                    alt={item.img}
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-2 my-4 w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { href: "/", icon: HomeIcon, text: t("home") },
              { href: "/about", icon: UserIcon, text: t("about") },
              { href: "/projects", icon: FolderIcon, text: t("projects") },
              { href: "/contact", icon: MailIcon, text: t("contact") },
            ].map((item, i) => (
              <Link href={item.href} key={i} className="w-full">
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-start cursor-pointer gap-4 px-8 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                >
                  {/* icon */}
                  <item.icon className="size-5 shrink-0" />

                  {/* text */}
                  <span className="text-lg font-medium">{item.text}</span>
                </Button>
              </Link>
            ))}
          </motion.div>

          {/* Theme Button */}
          <motion.div
            className="my-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ThemeButton />
          </motion.div>

          {/* Language Selector */}
          <motion.div
            className="my-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <LanguageSelector />
          </motion.div>
        </motion.div>
      </div>

      {/* ===================== Mobile Header ===================== */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white dark:bg-black">
        {/* Left: Profile Info */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/me.jpg"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="font-semibold">{t("name")}</h1>
            <p className="text-sm text-gray-400">{t("job")}</p>
          </div>
        </div>

        {/* Right: Theme + Menu */}
        <div className="flex items-center gap-3">
          <ThemeButton />
          <button onClick={() => setOpen(true)}>
            <Menu className="size-6 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* ===================== Mobile Drawer ===================== */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <motion.div
            className="w-[250px] bg-white dark:bg-gray-900 h-full p-5 flex flex-col relative"
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            exit={{ x: 250 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3"
            >
              <X className="size-6 cursor-pointer" />
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col gap-4 mt-10">
              {[
                { href: "/", icon: HomeIcon, text: t("home") },
                { href: "/about", icon: UserIcon, text: t("about") },
                { href: "/projects", icon: FolderIcon, text: t("projects") },
                { href: "/contact", icon: MailIcon, text: t("contact") },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  <item.icon className="size-5" />
                  <span>{item.text}</span>
                </Link>
              ))}
            </div>

            {/* Bottom: Language Selector */}
            <div className="mt-auto">
              <LanguageSelector />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default LeftContent;
