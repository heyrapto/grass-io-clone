import { FaTwitter, FaDiscord, FaTelegram, FaReddit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Learn", href: "/learn" },
    { name: "FAQ", href: "/faq" },
    { name: "Media Kit", href: "/media-kit" },
    { name: "Documentation", href: "/documentation" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "Email", icon: MdEmail, href: "#" },
    { name: "Telegram", icon: FaTelegram, href: "#" },
    { name: "Reddit", icon: FaReddit, href: "#" },
    { name: "Discord", icon: FaDiscord, href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "General Terms and Conditions", href: "/terms" },
    { name: "Grass Policy", href: "/grass-policy" },
    { name: "Cookie Settings", href: "/cookie-settings" },
  ];

  const certifications = [
    { image: "/member.webp" },
    { image: "/certified.webp" },
  ];

  return (
    <footer className="mt-auto">
      <div className="w-[90%] md:w-[80%] mx-auto pb-8">
        <div className="bg-black text-white rounded-t-3xl">
          <div className="p-6 md:p-12">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
              {/* Logo + Nav Links */}
              <div className="flex flex-col sm:flex-row sm:gap-10">
                <Image
                  src="/logo-white.webp"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="h-20 w-auto object-contain mb-6 sm:mb-0"
                />
                <ul className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social + Certifications */}
              <div className="flex flex-col gap-8 md:items-end">
                {/* Social Icons */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>

                {/* Certifications */}
                <div className="text-left md:text-right">
                  <p className="text-gray-400 text-sm mb-3">
                    Member Of | Certified By
                  </p>
                  <div className="flex justify-start md:justify-end gap-3">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="w-14 h-10 rounded-lg flex items-center justify-center bg-gray-900"
                      >
                        <Image
                          alt="Logo partners"
                          src={cert.image}
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <p className="text-gray-400 text-sm max-w-md">
                  © 2025 Grass Opco Ltd. All trademarks used on this website are
                  the property of Grass Opco Ltd. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  {legalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
