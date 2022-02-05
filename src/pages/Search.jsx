import React from 'react';
import Header from '../components/Header';
import FormSearch from '../components/FormSearch';

class Search extends React.Component {
  state = {
    searchName: '',
    searchButtonIsDisabled: true,
  }

  handleOnChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.handleSearchButtonState());
  }

  handleSearchButtonState = () => {
    const MAX_VALUE = 2;
    const { searchName } = this.state;
    this.setState({
      searchButtonIsDisabled: searchName.length < MAX_VALUE,
    });
  }

  handleSearchButton = () => {}

  render() {
    const { searchButtonIsDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <FormSearch
          loginButtonIsDisabled={ searchButtonIsDisabled }
          onChange={ this.handleOnChange }
          onClick={ this.handleSearchButton }
        />
      </div>
    );
  }
}

export default Search;
