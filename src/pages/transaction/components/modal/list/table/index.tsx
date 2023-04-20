import DataGrid from '../../../../../../components/data-grid';
import React from 'react';
import { commaformatter } from '../../../../../../utils';
import { t } from 'i18next';
import { useGetTransLocation } from '../../../../../../queries';
const Table = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');
  const { data } = useGetTransLocation(currentPage, filter, filters);

  const defaultCountryCode = localStorage.getItem('decoded-country-code');
  const searchText = t('Search by client name, id');
  return (
    <div className='h-full mt-4 pb-5'>
      <DataGrid
        loadMore={setCurrentPage}
        lastPage={1}
        total={data!?.data.length}
        setSearch={setSearch}
        setFilters={setFilters}
        title={searchText}
        rows={10}
        dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
        data={data!?.data}
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
