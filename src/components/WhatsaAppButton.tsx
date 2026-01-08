import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";



const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "+27790799974"; // replace with your WhatsApp number
  const message = "Hi! I want to know more about TeesNgees products.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg transition-transform duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } hover:bg-green-600`}
    >
      
      <FaWhatsapp className="w-8 h-8" />

      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
