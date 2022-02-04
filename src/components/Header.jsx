import React from 'react';
import { getUser } from '../services/userAPI';
import LoadingMessage from './LoadingMessage';

class Header extends React.Component {
  state = {
    userName: '',
    loading: true,
  }

  componentDidMount() {
    this.setUserNameFromDataOnState();
  }

  setUserNameFromDataOnState = async () => {
    const result = await getUser();
    this.setState({ userName: result.name, loading: false });
  };

  render() {
    const { userName, loading } = this.state;
    return (
      <header data-testid="header-component">
        <h1>Header Teste</h1>
        {loading ? <LoadingMessage />
          : <p data-testid="header-user-name">{userName}</p>}
      </header>
    );
  }
}

export default Header;
