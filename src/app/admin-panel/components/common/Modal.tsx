// components/common/Modal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md'
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) => {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`bg-white w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto rounded-lg shadow-xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-4 sm:p-6 border-b border-[#1C2321]/10 flex justify-between items-center z-10">
              <h3 className="font-display text-lg sm:text-xl font-light text-[#1C2321]">{title}</h3>
              <button onClick={onClose} className="p-1 hover:bg-[#1C2321]/5 rounded-full transition-colors">
                <X className="w-5 h-5 text-[#8a8a82]" />
              </button>
            </div>
            <div className="p-4 sm:p-6">
              {children}
            </div>
            {footer && (
              <div className="sticky bottom-0 bg-white p-4 sm:p-6 border-t border-[#1C2321]/10">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};