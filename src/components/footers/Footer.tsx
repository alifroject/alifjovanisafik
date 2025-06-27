import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-white py-16 z-0">
      <div className="flex flex-col items-center text-center mx-auto w-full">

        {/* Top Icon */}
        <div
          className="w-[89px] h-[93px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('Me.jpg')",
            borderRadius: "50%",
          }}
        />

        {/* Heading */}
        <h2 className="my-6 text-3xl max-sm:text-2xl font-semibold">
          <span>LET&apos;S COLLABORATE,</span>
          <br />
          <span>SHALL WE?</span>
        </h2>

        {/* Divider with expanding circle */}
        <div className="relative w-72 max-sm:w-4/5 h-[1px] bg-white my-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="group relative w-[100px] h-16 rounded-full bg-[#6CC3CD] transition-all duration-300 ease-in-out hover:w-72 hover:rounded-full hover:h-20">
              <Link href="/contact">
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-black">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact & Social Links */}
        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 text-sm text-gray-300">

          {/* Contact Details - Left Side */}
          <div className="flex flex-col gap-3 text-left pl-8">
            <div className="flex items-center gap-2">
              <FiPhone /> <span>+62 857-7694-8726</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail /> <span>alifnewjovanisafik@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin /> <span>Bekasi, Indonesia</span>
            </div>
          </div>

          {/* Social Links - Right Side */}
          <div className="flex justify-end items-start gap-6 text-xl pr-8">
            <a
              href="https://www.linkedin.com/in/alif-jovani-safik-a38118257/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/alifroject"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.instagram.com/alifkelly_lively"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-xs text-gray-500 text-center w-full">
          © {new Date().getFullYear()} Alif Jovani Safik. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
