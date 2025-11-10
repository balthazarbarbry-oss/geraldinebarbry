import { X } from 'lucide-react';
import { useEffect } from 'react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl: string;
}

export default function CalendlyModal({ isOpen, onClose, calendlyUrl }: CalendlyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Fermer"
        >
          <X size={24} className="text-gray-700" />
        </button>
        {calendlyUrl ? (
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600">URL Calendly non configurée</p>
          </div>
        )}
      </div>
    </div>
  );
}
