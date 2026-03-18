// components/admin-panel/MultiSelectFilter.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, X, Check, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type MultiSelectFilterProps = {
  label: string;
  value?: string[]; // still optional
  options: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  maxHeight?: string;
  showSearch?: boolean;
  disabled?: boolean;
  error?: string;
};

// Responsive breakpoint
const MOBILE_BREAKPOINT = 640;

export default function MultiSelectFilter({
  label,
  value = [], // ✅ default empty array
  options,
  onChange,
  placeholder = "Select options...",
  maxHeight = "300px",
  showSearch = true,
  disabled = false,
  error,
}: MultiSelectFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus search input when dropdown opens
      if (showSearch && searchInputRef.current) {
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, showSearch]);

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const handleSelectAll = () => {
    if (value.length === options.length) {
      onChange([]);
    } else {
      onChange([...options]);
    }
  };

  const handleClearAll = () => {
    onChange([]);
    setIsOpen(false);
  };

  const removeSelection = (optionToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== optionToRemove));
  };

  const selectedCount = value.length;
  const totalCount = options.length;

  return (
    <div className="space-y-1 sm:space-y-2" ref={containerRef}>
      {/* Label */}
      <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82]">
        {label}
        {selectedCount > 0 && (
          <span className="ml-2 text-[#44A194] font-medium">
            ({selectedCount} selected)
          </span>
        )}
      </label>

      {/* Error message */}
      {error && (
        <p className="text-[10px] sm:text-xs text-[#EC8F8D] mt-1">{error}</p>
      )}

      {/* Selector Button */}
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={`w-full border ${error ? 'border-[#EC8F8D]' : 'border-[#1C2321]/10'} px-3 sm:px-4 py-2 text-xs sm:text-sm text-left focus:outline-none focus:border-[#44A194] transition-colors bg-white flex items-center justify-between ${
            disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'cursor-pointer'
          }`}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className={`truncate ${value.length > 0 ? 'text-[#1C2321]' : 'text-[#8a8a82]'}`}>
            {value.length > 0
              ? isMobile
                ? `${value.length} selected`
                : value.slice(0, 2).join(', ') + (value.length > 2 ? ` +${value.length - 2} more` : '')
              : placeholder}
          </span>
          {isOpen ? (
            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#8a8a82] flex-shrink-0" />
          ) : (
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-[#8a8a82] flex-shrink-0" />
          )}
        </button>

        {/* Selected Tags - Only show on desktop when not open */}
        {!isMobile && value.length > 0 && !isOpen && (
          <div className="flex flex-wrap gap-1 mt-2">
            {value.slice(0, 3).map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs rounded"
              >
                <span className="truncate max-w-[100px]">{item}</span>
                <button
                  onClick={(e) => removeSelection(item, e)}
                  className="hover:text-[#EC8F8D] transition-colors"
                  aria-label={`Remove ${item}`}
                >
                  <X className="w-2 h-2 sm:w-3 sm:h-3" />
                </button>
              </span>
            ))}
            {value.length > 3 && (
              <span className="px-2 py-0.5 bg-[#8a8a82]/10 text-[#8a8a82] text-[8px] sm:text-xs rounded">
                +{value.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full mt-1 bg-white border border-[#1C2321]/10 shadow-lg"
              style={{ maxHeight }}
            >
              {/* Search Input */}
              {showSearch && options.length > 5 && (
                <div className="sticky top-0 bg-white p-2 border-b border-[#1C2321]/10">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-[#8a8a82]" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search options..."
                      className="w-full pl-7 sm:pl-8 pr-2 py-1.5 sm:py-2 text-xs sm:text-sm border border-[#1C2321]/10 focus:outline-none focus:border-[#44A194]"
                    />
                  </div>
                </div>
              )}

              {/* Select All / Clear All */}
              <div className="sticky top-12 bg-white p-2 border-b border-[#1C2321]/10 flex justify-between">
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="text-[10px] sm:text-xs text-[#44A194] hover:text-[#38857a] transition-colors uppercase tracking-[0.16em]"
                >
                  {value.length === options.length ? 'Deselect All' : 'Select All'}
                </button>
                {value.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="text-[10px] sm:text-xs text-[#EC8F8D] hover:text-[#d4706e] transition-colors uppercase tracking-[0.16em]"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Options List */}
              <div className="overflow-y-auto" style={{ maxHeight: `calc(${maxHeight} - 100px)` }}>
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => {
                    const isSelected = value.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelect(option)}
                        className={`w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-[#F4F0E4] transition-colors ${
                          isSelected ? 'bg-[#44A194]/5 text-[#1C2321]' : 'text-[#1C2321]'
                        }`}
                      >
                        <span className="truncate flex-1">{option}</span>
                        {isSelected && (
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#44A194] flex-shrink-0" />
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="px-3 sm:px-4 py-8 text-center">
                    <p className="text-xs sm:text-sm text-[#8a8a82]">No options found</p>
                  </div>
                )}
              </div>

              {/* Selected count footer */}
              {value.length > 0 && (
                <div className="sticky bottom-0 bg-white p-2 border-t border-[#1C2321]/10">
                  <p className="text-[8px] sm:text-xs text-[#8a8a82]">
                    {value.length} option{value.length !== 1 ? 's' : ''} selected
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Selected Tags */}
      {isMobile && value.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {value.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs rounded"
            >
              <span className="truncate max-w-[80px]">{item}</span>
              <button
                onClick={(e) => removeSelection(item, e)}
                className="hover:text-[#EC8F8D] transition-colors"
                aria-label={`Remove ${item}`}
              >
                <X className="w-2 h-2" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}