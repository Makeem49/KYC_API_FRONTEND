import { t } from 'i18next';
import React from 'react';

import DataGrid from '../../../../../../components/data-grid';
import { useGetTransLocation } from '../../../../../../queries';
import { commaformatter } from '../../../../../../utils';

const Table = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');
  const { data } = useGetTransLocation(currentPage, pageSize, filter, filters);

  const filteredData = data!?.data.filter((item) => {
    const totalValue = parseFloat(item.total_transactions_value);
    return totalValue > 0;
  });

  const defaultCountryCode = localStorage.getItem('decoded-country-code');
  const searchText = t('Search by client name, id');
  return (
    <div className="h-full mt-4 pb-5">
      <DataGrid
        loadMore={setCurrentPage}
        lastPage={1}
        total={data!?.data.length}
        setSearch={setSearch}
        setFilters={setFilters}
        setSelectedEntries={setPageSize}
        title={searchText}
        rows={10}
        dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
        data={filteredData}
        headerFilter={[
          { name: '', accessor: '' },
          { name: '', accessor: '' },
        ]}
        headers={[
          {
            accessor: 'name',
            hidden: false,
            name: `${t('Location')}`,
            sortable: true,
            static: false,
          },

          {
            accessor: 'total_clients',
            hidden: false,
            name: `${t('Active Users')}`,
            sortable: true,
            static: false,
          },
          {
            accessor: 'transactions_count',
            hidden: false,
            name: `${t('Count of Transactions')}`,
            sortable: true,
            static: true,
            row: (val) => <span>{commaformatter(val)} </span>,
          },

          {
            accessor: 'total_transactions_value',
            hidden: false,
            name: `${t('Value')} ${
              defaultCountryCode === 'NG'
                ? '₦'
                : defaultCountryCode === 'KE'
                ? 'KES'
                : 'UGX'
            }`,
            sortable: true,
            static: false,
            row: (val) => <span>{commaformatter(val)} </span>,
          },
        ]}
        withExport
        withGlobalFilters
        withCheck
      />
    </div>
  );
};

export default Table;
