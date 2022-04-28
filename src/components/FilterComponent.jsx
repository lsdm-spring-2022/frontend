import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const FilterComponent = ({ filterText, onFilter, onClear }) => {
  return (
    <Input
      icon={<Icon name="search" onClick={onClear} inverted circular link />}
      placeholder="Search..."
      value={filterText}
      onChange={onFilter}
    />
  );
};

FilterComponent.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
