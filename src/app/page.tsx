'use client'
import React, { useState } from 'react';
import DatePicker from '@/components/DatePicker';
import Table from '@/components/Table';
import SearchBox from '@/components/SearchBox';

const Home: React.FC = () => {
const [selectedDate1, setSelectedDate1] = useState<Date | null>(
  new Date(new Date().getFullYear(), new Date().getMonth(), 1),
);
  const [selectedDate2, setSelectedDate2] = useState<Date | null>(new Date());
  const [filteredData, setFilteredData] = useState([] as any[]);
  const initialData = [
    {
      id: 1,
      serviceProvider: 'Provider A',
      testName: 'Test 1',
      price: '$100',
      testOn: '2024/05/02',
      status: 'Completed',
    },
    {
      id: 2,
      serviceProvider: 'Provider B',
      testName: 'Test 2',
      price: '$150',
      testOn: '2024/05/21',
      status: 'Pending',
    },
    {
      id: 3,
      serviceProvider: 'Provider C',
      testName: 'Test 3',
      price: '$250',
      testOn: '2024/05/22',
      status: 'Pending',
    },
  ];
  const columns = [
    { header: '#', accessor: 'id' },
    { header: 'Service Provider', accessor: 'serviceProvider' },
    { header: 'Test Name', accessor: 'testName' },
    { header: 'Price', accessor: 'price' },
    { header: 'Test On', accessor: 'testOn' },
    { header: 'Status', accessor: 'status' },
  ];

  const filterDataByDates = () => {
    if (selectedDate1 && selectedDate2) {
      const filtered = initialData.filter((item) => {
        const testDate = new Date(item.testOn);
        return testDate >= selectedDate1 && testDate <= selectedDate2;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(initialData);
    }
  };

  const filterDataBySearch = (query: string) => {
    const searchResults = initialData.filter((item) => {
      return (
        item.serviceProvider.toLowerCase().includes(query.toLowerCase()) ||
        item.testName.toLowerCase().includes(query.toLowerCase()) ||
        item.price.toLowerCase().includes(query.toLowerCase()) ||
        item.testOn.toLowerCase().includes(query.toLowerCase()) ||
        item.status.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredData(searchResults);
  };

  React.useEffect(() => {
    filterDataByDates();
  }, [selectedDate1, selectedDate2]);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex mb-4 justify-between items-center">
        <div className="flex">
          <div className="mr-4">
            <DatePicker selectedDate={selectedDate1} onChange={setSelectedDate1} />
          </div>
          <div className="mr-4">
            <DatePicker selectedDate={selectedDate2} onChange={setSelectedDate2} />
          </div>
        </div>
        <SearchBox onSearch={filterDataBySearch} />
      </div>
      <Table data={filteredData} columns={columns} />
    </div>
  );
};

export default Home;
