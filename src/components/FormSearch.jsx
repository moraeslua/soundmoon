import React from 'react';
import PropTypes from 'prop-types';

class FormSearch extends React.Component {
  render() {
    const { searchName, searchButtonIsDisabled, onChange, onClick } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <input
            id="searchName"
            data-testid="search-artist-input"
            value={ searchName }
            onChange={ onChange }
          />
          <button
            id="searchButton"
            type="button"
            data-testid="search-artist-button"
            disabled={ searchButtonIsDisabled }
            onClick={ onClick }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

FormSearch.propTypes = {
  searchName: PropTypes.string.isRequired,
  searchButtonIsDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormSearch;
