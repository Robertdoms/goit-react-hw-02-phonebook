import PropTypes from 'prop-types';
import { Component } from 'react';
import styled from '@emotion/styled';

class ContactInputSection extends Component {
  state = {
    name: '',
    number: '',
  };
}

ContactInputSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactInputSection;
