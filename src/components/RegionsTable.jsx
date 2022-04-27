import React from 'react';
import DataTable from 'react-data-table-component';

import { FilterComponent } from './FilterComponent';
import { REGION_NAMES } from '../data/regions';

const columns = [
  {
    name: 'Region',
    selector: (row) => row.region,
  },
  {
    name: 'Reddit Data Range',
    selector: (row) => row.redditDataRange,
  },
  {
    name: 'Twitter Data Range',
    selector: (row) => row.twitterDataRange,
  },
];

const data = REGION_NAMES.map((region) => {
  return {
    region,
    redditDataRange: 'Jan 1, 2012 - Dec 31, 2021',
    twitterDataRange: 'Mar 29, 2022 - May 1, 2022',
  };
});

export const RegionsTable = () => {
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.region &&
      item.region.toLowerCase().includes(filterText.toLowerCase())
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

  return (
    <DataTable
      title="Regions Data"
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
