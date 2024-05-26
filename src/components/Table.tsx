import React, { useState } from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import TablePagination from './TablePagination';

interface TableProps {
  data: any[];
  columns: { header: string; accessor: string }[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(2);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

  const handleChangeRowsPerPage = (selectedRowsPerPage: number) => {
    setRowsPerPage(selectedRowsPerPage);
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: string) => {
    if (!sortConfig) {
      return <FaSort />;
    }
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };
  
  return (
    <div className="">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-4 text-left bg-gray-100 cursor-pointer"
                onClick={() => requestSort(column.accessor)}
              >
                <div className="flex items-center">
                  {column.header}
                  <span className="ml-2">{getSortIcon(column.accessor)}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, rowsPerPage).map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-lightBlue'}>
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className={`py-2 px-4 ${column.accessor === 'status' ? 'text-blue-500' : ''}`}
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination data={data} onChangeRowsPerPage={handleChangeRowsPerPage} />
    </div>
  );
};

export default Table;
