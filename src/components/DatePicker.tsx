import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  return (
    <ReactDatePicker
      className="border border-gray-500 rounded-md p-2 outline-none w-full text-center"
      selected={selectedDate}
      onChange={(date) => onChange(date)}
      dateFormat="yyyy/MM/dd"
    />
  );
};

export default DatePicker;
