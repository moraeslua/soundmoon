import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import LoadingMessage from '../Loading';

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
        {loading ? <LoadingMessage />
          : <p data-testid="header-user-name">{userName}</p>}
        <ul>
          <li><Link data-testid="link-to-search" to="/search"> Pesquisa </Link></li>
          <li>
            <Link
              data-testid="link-to-favorites"
              to="/favorites"
            >
              Favoritos
            </Link>

          </li>
          <li><Link data-testid="link-to-profile" to="/profile"> Perfil </Link></li>
        </ul>
      </header>
    );
  }
}

export default Header;
