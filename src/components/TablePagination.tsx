import React, { useState } from 'react';

interface TablePaginationProps {
  data: any[];
  onChangeRowsPerPage: (rowsPerPage: number) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({ data, onChangeRowsPerPage }) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(2);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRowsPerPage = Number(event.target.value);
    setRowsPerPage(selectedRowsPerPage);
    onChangeRowsPerPage(selectedRowsPerPage);
  };

  return (
    <div className="bg-[#f4f7fc] mt-4 flex items-center justify-end px-4 py-2">
      <div className="flex items-center justify-end">
        <span className="mr-2">Rows per page:</span>
        <select
          className="px-3 py-1 rounded-md focus:outline-none focus:bg-gray-400"
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          style={{ backgroundColor: '#ffffff' }}
        >
          <option value="2">2</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

export default TablePagination;
