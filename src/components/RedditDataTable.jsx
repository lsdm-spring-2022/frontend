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
    name: 'Subreddit',
    selector: (row) => row.subreddit,
    sortable: true,
  },
  {
    name: 'Post Title',
    selector: (row) => row.postTitle,
    sortable: true,
    grow: 4,
  },
  {
    name: 'Upvotes',
    selector: (row) => row.upvotes,
    sortable: true,
  },
  {
    name: 'Date Stored',
    selector: (row) => row.dateStored,
  },
  {
    name: 'Comments',
    selector: (row) => row.comments,
  },
];

export const RedditDataTable = ({ redditData }) => {
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = redditData.filter(
    (item) =>
      (item.region &&
        item.region.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.subreddit &&
        item.subreddit.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.postTitle &&
        item.postTitle.toLowerCase().includes(filterText.toLowerCase()))
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
        title="Reddit Data"
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

  return <>{redditData.length > 0 ? renderTable(redditData) : null}</>;
};

RedditDataTable.propTypes = {
  redditData: PropTypes.array.isRequired,
};
