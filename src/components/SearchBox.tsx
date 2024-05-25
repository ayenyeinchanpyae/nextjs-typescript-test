import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border border-gray-500 rounded-md p-2 outline-none w-full"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBox;
