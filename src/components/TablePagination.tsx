import React from "react";
import CustomDropdown from "./CustomDropdown";

interface TablePaginationProps {
  data: any[];
  onChangeRowsPerPage: (rowsPerPage: number) => void;
}

interface optionProps {
  id: number;
  value: number;
  label: string;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  data,
  onChangeRowsPerPage,
}) => {
  const options: optionProps[] = [
    {
      id: 0,
      value: 2,
      label: "2",
    },
    {
      id: 1,
      value: 10,
      label: "10",
    },
    {
      id: 2,
      value: 15,
      label: "15",
    },
    {
      id: 3,
      value: 25,
      label: "25",
    },
    {
      id: 4,
      value: 50,
      label: "50",
    },
    {
      id: 5,
      value: 100,
      label: "100",
    },
  ];

  const handleChangeRowsPerPage = (selectedRowsPerPage: number) => {
    onChangeRowsPerPage(selectedRowsPerPage);
  };

  return (
    <div className="bg-lightBlue mt-4 flex items-center justify-end px-4 py-2">
      <div className="relative flex items-center justify-end">
        <span className="mr-2">Rows per page:</span>
        <CustomDropdown
          options={options}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default TablePagination;
