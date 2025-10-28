import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-700 mt-16 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <Image
            src="/images/me.jpg"
            alt="Abdallah"
            width={35}
            height={35}
            className="rounded-full object-cover"
          />
          <p className="text-sm text-gray-700 dark:text-gray-300">
            ©2025{" "}
            <b className="text-md text-gray-900 dark:text-white">
              Abdallah Atef
            </b>{" "}
            — Software Engineer. All rights reserved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          {[
            {
              href: "https://www.linkedin.com/in/abdullah-atef-b2061a324/",
              img: "linkedin.png",
              alt: "LinkedIn",
            },
            {
              href: "https://wa.me/201157713042",
              img: "whatsapp.jpg",
              alt: "WhatsApp",
            },
            {
              href: "https://github.com/oxshaghp",
              img: "github.png",
              alt: "GitHub",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Image
                src={`/images/${item.img}`}
                alt={item.alt}
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
