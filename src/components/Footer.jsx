import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const icons = [
    {
      icon: <FaEnvelope />,
      link: "mailto:selvaganesh05082001@gmail.com",
      label: "Email",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_mr_selva_ramachandran_/",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/selvaganesh05082001/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-transparent py-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center space-x-8 text-3xl text-white"
      >
        {icons.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00acee" }}
            transition={{ type: "spring", stiffness: 200 }}
            title={item.label}
            className="hover:text-blue-400"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      <p className="text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Selvaganesh R | Built with ❤️ and passion
      </p>
    </footer>
  );
}
