import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

import { FilterComponent } from './FilterComponent';

const columns = [
  {
    name: 'Region',
    selector: (row) => row.region,
    sortable: true,
  },
  {
    name: 'Trend',
    selector: (row) => row.trend,
    sortable: true,
    grow: 2,
  },
  {
    name: 'Tweet Volume',
    selector: (row) => row.tweetVolume,
    sortable: true,
  },
  {
    name: 'Date Trend Started',
    selector: (row) => row.dateTrendStarted,
  },
  {
    name: 'Date Retrieved',
    selector: (row) => row.dateRetrieved,
  },
];

export const TwitterDataTable = ({ twitterData }) => {
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = twitterData.filter(
    (item) =>
      (item.region &&
        item.region.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.trend &&
        item.trend.toLowerCase().includes(filterText.toLowerCase()))
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const renderTable = () => {
    return (
      <DataTable
        title="Twitter Data"
        columns={columns}
        data={filteredItems}
        theme="dark"
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
    );
  };

  return <>{twitterData.length > 0 ? renderTable(twitterData) : null}</>;
};

TwitterDataTable.propTypes = {
  twitterData: PropTypes.array.isRequired,
};
