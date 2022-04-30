import React from 'react';
import PropTypes from 'prop-types';
import { Header, Message } from 'semantic-ui-react';

export const ErrorMessage = ({ errors }) => {
  const renderContent = () => {
    return errors.map((item) => {
      return (
        <Header as="h4" color="red">
          {item}
        </Header>
      );
    });
  };

  return (
    <Message>
      <Message.Header>Form Error(s)</Message.Header>
      {renderContent()}
    </Message>
  );
};

ErrorMessage.propTypes = {
  errors: PropTypes.array.isRequired,
};
