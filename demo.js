import React, { useState } from 'react';
import { Table, DatePicker } from 'antd';
import dayjs from 'dayjs';
import './index.css';

const EditableDateTable = () => {
  const [data, setData] = useState([
    {
      key: '1',
      description: 'Public Hearing',
      originalDate: '05/29/2024',
      finalDate: null,
    },
    {
      key: '2',
      description: 'Location Design Concept Aceptance',
      originalDate: '06/01/2024',
      finalDate: null,
    },
    {
      key: '3',
      description: 'Production',
      originalDate: '06/05/2024',
      finalDate: null,
    },
    {
      key: '4',
      description: 'Package Received for Letting',
      originalDate: '06/10/2024',
      finalDate: '06/11/2024',
    },
    {
      key: '5',
      description: 'Letting',
      originalDate: '06/10/2024',
      finalDate: null,
    },
    //...more data
  ]);

  const handleDateChange = (date, dateString, key) => {
    const newData = [...data];
    const target = newData.find((item) => item.key === key);
    if (target) {
      target.finalDate = dateString;
      setData(newData);
    }
  };

  const columns = [
    {
      title: 'Activity',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Current',
      dataIndex: 'originalDate',
      key: 'originalDate',
    },
    {
      title: 'New',
      dataIndex: 'finalDate',
      key: 'finalDate',
      render: (text, record) => (
        <DatePicker
          defaultValue={record.finalDate ? dayjs(record.finalDate) : null}
          status={record.finalDate ? 'warning' : ''}
          format={'MM/DD/YYYY'}
          onChange={(date, dateString) =>
            handleDateChange(date, dateString, record.key)
          }
        />
      ),
    },
  ];

  return (
    <Table
      size="small"
      columns={columns}
      dataSource={data}
      rowClassName={(record) => (record.finalDate ? 'highlight' : '')}
    />
  );
};

export default EditableDateTable;
