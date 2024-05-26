"use client";
import React, { useState, useRef, useEffect } from "react";

interface optionProps {
  id: number;
  value: number;
  label: string;
}

interface PageProps {
  options: optionProps[];
  handleChangeRowsPerPage: (selectedRowsPerPage: number) => void;
}

const CustomDropdown = ({ options, handleChangeRowsPerPage }: PageProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number>(2);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    handleChangeRowsPerPage(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-20" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex justify-between items-center"
      >
        {selectedOption}
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow-lg">
          <ul className="max-h-48 overflow-auto">
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option.value)}
                className="px-4 py-2 hover:bg-[#eff5fb] cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
