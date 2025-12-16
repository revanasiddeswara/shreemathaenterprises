import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all hover:scale-105"
      aria-label="Chat on WhatsApp"
      data-testid="button-floating-whatsapp"
    >
      <SiWhatsapp className="h-7 w-7" />
    </a>
  );
}
